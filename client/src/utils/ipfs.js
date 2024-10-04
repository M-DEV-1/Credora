// src/utils/ipfs.js
import { create } from 'ipfs-http-client';

const projectId = 'YOUR_INFURA_PROJECT_ID';    // Get from infura.io
const projectSecret = 'YOUR_INFURA_PROJECT_SECRET';
const auth = 'Basic ' + Buffer.from(projectId + ':' + projectSecret).toString('base64');

const ipfs = create({
    host: 'ipfs.infura.io',
    port: 5001,
    protocol: 'https',
    headers: {
        authorization: auth,
    },
});

export const uploadToIPFS = async (file) => {
    try {
        const added = await ipfs.add(file);
        const url = `https://ipfs.io/ipfs/${added.path}`;
        return url;
    } catch (error) {
        console.error('Error uploading file to IPFS:', error);
        throw error;
    }
};

export const getFromIPFS = async (hash) => {
    try {
        const stream = ipfs.cat(hash);
        let data = [];
        
        for await (const chunk of stream) {
            data.push(chunk);
        }
        
        return Buffer.concat(data).toString();
    } catch (error) {
        console.error('Error getting file from IPFS:', error);
        throw error;
    }
};