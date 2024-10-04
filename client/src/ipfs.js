import { create } from 'ipfs-http-client';

// Connect to the IPFS network
const ipfs = create({ 
    host: 'ipfs.infura.io', // Infura IPFS endpoint
    port: 5001,              // Default IPFS port
    protocol: 'https'        // Use HTTPS
});

// Function to upload a file to IPFS
export const uploadToIPFS = async (file) => {
    try {
        const result = await ipfs.add(file);
        return result.path; // Return the IPFS hash
    } catch (error) {
        console.error("Error uploading to IPFS:", error);
        throw error; // Handle error
    }
};
 