


# Chat with ChATGPT 4o With Images

A web-based chat application that supports Markdown messages, image uploads, and persistent chat sessions. It integrates with the Segmind API for advanced backend processing.

---

## Features

- **Rich Markdown Support**: Write messages with headings, code blocks, and math equations.
- **Image Uploads**: Send images as part of the chat.
- **Session Management**: Persistent chat sessions stored in `localStorage` and managed via the backend.
- **Syntax Highlighting**: Code blocks are beautifully rendered using `Prism.js`.

---

## Prerequisites

1. **Node.js**: Install the latest version of [Node.js](https://nodejs.org/).
2. **npm**: Comes with Node.js; verify installation with `npm -v`.
3. **Segmind API Key**: Obtain an API key from [Segmind](https://segmind.com) and set it as `SG_API_KEY` in the `.env` file.

---

## Getting Started

### 1. Clone the Repository
```bash
git clone https://github.com/your-username/chat-with-devil.git
cd chat-with-devil
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Configure Environment Variables
Create a `.env` file in the root directory and add your Segmind API key:
```
SG_API_KEY=your_segmind_api_key
PORT=5000
```

### 4. Run the Backend Server
```bash
npm start
```
This starts the server at `http://localhost:5000`.

---

## Frontend

### Open the Application
Open `index.html` in your browser. The frontend communicates with the backend server for chat functionality.

### Features
- Start a new chat session or continue old ones.
- Write messages using Markdown syntax.
- Upload images to include them in your chat.

---

## API Endpoints

### 1. `POST /create-chat`
Creates a new chat session.

#### Response:
```json
{
  "sessionId": "unique-session-id"
}
```

---

### 2. `POST /chat`
Sends a message to the chat backend.

#### Request Body:
- **msg**: Message text.
- **sessionId**: Session ID from `/create-chat`.
- **img**: Optional image file.

#### Response:
```json
{
  "msg": "Response from Devil"
}
```

---

## Libraries and Tools

### Backend
- **Express.js**: Backend framework for API endpoints.
- **Multer**: Handles image uploads.
- **crypto**: Generates unique IDs for sessions and chats.

### Frontend
- **Tailwind CSS**: For styling.
- **marked**: Parses Markdown messages.
- **Prism.js**: Adds syntax highlighting for code blocks.

---

## Project Structure

```
chat-with-devil/
├── public/
│   ├── index.html       # Frontend UI
│   └── styles.css       # Additional styles if any
├── uploads/             # Temporary storage for uploaded files
├── chatMappings.json    # Maps session IDs to chat IDs
├── chat.js              # Chat logic
├── server.js            # Express server
├── package.json         # Node.js dependencies
└── .env                 # API Key and environment variables
```

---

## How to Contribute

1. Fork the repository.
2. Create a new branch:
   ```bash
   git checkout -b feature-name
   ```
3. Commit your changes:
   ```bash
   git commit -m "Add feature"
   ```
4. Push to the branch:
   ```bash
   git push origin feature-name
   ```
5. Open a Pull Request.

---

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

---

## Support

If you encounter any issues, feel free to open an issue in the GitHub repository or contact support at [Segmind](https://segmind.com).

Happy Coding!




