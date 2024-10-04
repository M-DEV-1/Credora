// src/utils/ipfs.js
import { create } from 'ipfs-http-client';
import dotenv from 'dotenv';

// Load environment variables from .env file
dotenv.config();

// Use your Infura API Key
const apiKey = process.env.INFURA_API_KEY; // Ensure this matches the variable name in .env

const ipfs = create({
    host: 'ipfs.infura.io',
    port: 5001,
    protocol: 'https',
    headers: {
        Authorization: `Basic ${Buffer.from(apiKey + ':').toString('base64')}`, // API key without a secret
    },
});

// Function to upload files to IPFS
export const uploadToIPFS = async (file) => {
    try {
        const added = await ipfs.add(file);
        const url = `https://ipfs.io/ipfs/${added.path}`; // Construct the URL for the uploaded file
        return url; 
    } catch (error) {
        console.error('Error uploading file to IPFS:', error);
        throw error; 
    }
};

// Function to retrieve files from IPFS
export const getFromIPFS = async (hash) => {
    try {
        const stream = ipfs.cat(hash);
        let data = [];
        
        for await (const chunk of stream) {
            data.push(chunk);
        }
        
        return Buffer.concat(data).toString(); // Return the retrieved data as a string
    } catch (error) {
        console.error('Error getting file from IPFS:', error);
        throw error; 
    }
};
