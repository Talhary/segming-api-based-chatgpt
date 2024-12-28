import express from 'express';
import multer from 'multer';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import crypto from 'crypto'; // For generating unique IDs
import { chat } from './chat.js'; // Adjust path accordingly
import 'dotenv/config';

const app = express();
const port = process.env.PORT || 5000;

// Middleware for parsing JSON and URL-encoded data
app.use(express.json());
app.use(express.static('./public'));

// File upload setup with multer and file validation
const __dirname = path.dirname(fileURLToPath(import.meta.url));
const allowedExtensions = ['.jpg', '.jpeg', '.png']; // Allowed file extensions
const upload = multer({
    dest: path.join(__dirname, 'uploads/'),
    fileFilter: (req, file, cb) => {
        const ext = path.extname(file.originalname).toLowerCase();
        if (allowedExtensions.includes(ext)) {
            cb(null, true);
        } else {
            cb(new Error(`File type not allowed. Allowed types: ${allowedExtensions.join(', ')}`));
        }
    },
});

// File to store chat mappings
const CHAT_MAPPING_FILE = path.join(__dirname, 'chatMappings.json');

// Initialize chatMappings.json if it doesn't exist
if (!fs.existsSync(CHAT_MAPPING_FILE)) {
    fs.writeFileSync(CHAT_MAPPING_FILE, JSON.stringify({}));
}

// Route to create a new chat session
app.post('/create-chat', (req, res) => {
    const chatId = crypto.randomUUID(); // Generate unique chat ID
    const sessionId = crypto.randomUUID(); // Generate unique session ID

    // Store mapping in chatMappings.json
    const chatMappings = JSON.parse(fs.readFileSync(CHAT_MAPPING_FILE, { encoding: 'utf-8' }));
    chatMappings[sessionId] = chatId;
    fs.writeFileSync(CHAT_MAPPING_FILE, JSON.stringify(chatMappings));

    res.status(200).json({ sessionId });
});

// Route to handle chat requests
app.post('/chat', upload.single('img'), async (req, res) => {
    const { msg, sessionId } = req.body;
    const imgFile = req.file;

    try {
        if (!sessionId) {
            return res.status(400).json({ error: 'Session ID is required' });
        }

        // Retrieve chatId from sessionId
        const chatMappings = JSON.parse(fs.readFileSync(CHAT_MAPPING_FILE, { encoding: 'utf-8' }));
        const chatId = chatMappings[sessionId];
        if (!chatId) {
            return res.status(404).json({ error: 'Invalid session ID' });
        }

        let imgBase64 = null;

        if (imgFile) {
            imgBase64 = await convertImageToBase64(path.join(imgFile.path));
            fs.unlinkSync(path.join(imgFile.path)); // Clean up uploaded file after conversion
        }

        const response = await chat(msg, imgBase64, chatId);

        res.status(200).json({
            msg: response?.content || 'No response from the chat function',
        });
    } catch (error) {
        console.error('Error processing chat:', error);
        if (error.message.includes('File type not allowed')) {
            return res.status(400).json({ error: error.message });
        }
        res.status(500).json({ error: 'An error occurred while processing your request' });
    }
});

// Helper function to convert image to Base64
async function convertImageToBase64(imagePath) {
    try {
        const data = fs.readFileSync(imagePath, { encoding: 'base64' });
        return `data:image/jpeg;base64,${data}`;
    } catch (error) {
        console.error('Error reading file:', error);
        throw error;
    }
}

// Start the server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});

export default app;
