const { MongoClient } = require('mongodb');

exports.handler = async (event) => {
    const headers = {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Headers': 'Content-Type',
        'Access-Control-Allow-Methods': 'GET, OPTIONS',
    };

    if (event.httpMethod === 'OPTIONS') {
        // Handle preflight requests for CORS
        return {
            statusCode: 200,
            headers,
        };
    }

    // Extract category from the query parameters
    const category = event.queryStringParameters.category;

    const uri = process.env.MONGO_URI;  // MongoDB connection string stored as environment variable
    const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

    try {
        await client.connect();
        const database = client.db('Studio');
        const collection = database.collection('images');

        // Find all images with the specified category
        const images = await collection.find({ category }).toArray();

        await client.close();

        return {
            statusCode: 200,
            headers,
            body: JSON.stringify(images),  // Return the images as JSON
        };
    } catch (error) {
        return {
            statusCode: 500,
            headers,
            body: JSON.stringify({ message: 'Error fetching images', error }),
        };
    }
};
