const { MongoClient, ObjectId } = require('mongodb');
const cloudinary = require('cloudinary').v2;

// Configure Cloudinary credentials
cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET,
});

exports.handler = async (event) => {
    const headers = {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Headers': 'Content-Type',
        'Access-Control-Allow-Methods': 'DELETE, OPTIONS',
    };

    if (event.httpMethod === 'OPTIONS') {
        return {
            statusCode: 200,
            headers,
        };
    }

    if (event.httpMethod !== 'DELETE') {
        return {
            statusCode: 405,
            headers,
            body: JSON.stringify({ message: 'Method Not Allowed' }),
        };
    }

    // Parse the request body to get image ID and Cloudinary ID
    const { imageId, cloudinaryId } = JSON.parse(event.body);

    if (!imageId || !cloudinaryId) {
        return {
            statusCode: 400,
            headers,
            body: JSON.stringify({ message: 'Invalid request, imageId and cloudinaryId required' }),
        };
    }

    // MongoDB connection string
    const uri = process.env.MONGO_URI; // Ensure you store this in environment variables
    const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

    try {
        // 1. Delete the image from Cloudinary
        const cloudinaryResult = await cloudinary.uploader.destroy(cloudinaryId);
        if (cloudinaryResult.result !== 'ok') {
            throw new Error(`Failed to delete image from Cloudinary: ${cloudinaryResult.result}`);
        }

        // 2. Delete the image entry from MongoDB
        await client.connect();
        const database = client.db('imageGallery');  // Adjust with your DB name
        const collection = database.collection('images'); // Adjust with your collection name

        const result = await collection.deleteOne({ _id: ObjectId(imageId) });

        if (result.deletedCount === 0) {
            throw new Error('Image not found in MongoDB');
        }

        return {
            statusCode: 200,
            headers,
            body: JSON.stringify({ message: 'Image deleted successfully' }),
        };
    } catch (error) {
        return {
            statusCode: 500,
            headers,
            body: JSON.stringify({ message: 'Error deleting image', error: error.message }),
        };
    } finally {
        await client.close();
    }
};
