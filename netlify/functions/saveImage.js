const { MongoClient } = require('mongodb');

exports.handler = async (event) => {
    // Allow requests from any origin
    const headers = {
        'Access-Control-Allow-Origin': '*', // Allow requests from any origin
        'Access-Control-Allow-Headers': 'Content-Type',
        'Access-Control-Allow-Methods': 'POST, OPTIONS',
    };

    if (event.httpMethod === 'OPTIONS') {
        // Handle CORS preflight request
        return {
            statusCode: 200,
            headers,
        };
    }

    // Parse the incoming request body
    const { url, category } = JSON.parse(event.body);

    const uri = process.env.MONGO_URI; // Your MongoDB connection string
    const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

    try {
        await client.connect();
        const database = client.db('Studio');
        const collection = database.collection('images');

        // Insert the image URL and category into the collection
        const result = await collection.insertOne({ url, category });

        await client.close();

        // Return success response with CORS headers
        return {
            statusCode: 200,
            headers,
            body: JSON.stringify({ message: 'Image URL saved successfully', result }),
        };
    } catch (error) {
        // Return error response with CORS headers
        return {
            statusCode: 500,
            headers,
            body: JSON.stringify({ message: 'Failed to save image URL', error }),
        };
    }
};
