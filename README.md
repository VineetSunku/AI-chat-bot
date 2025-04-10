# AI Chat Assistant 💬✨

An interactive AI-powered chat assistant built with **React.js** and **Express.js**, providing a clean, real-time chatting experience.  
Talk to an AI assistant, ask questions, and receive intelligent responses in an elegant chat interface.

This project is fully customizable and perfect for integrating any AI service like **OpenAI GPT**, **Gemini**, or your own custom model!


---

## 🚀 Features

- ✅ Real-time AI-powered chat interface
- ✅ Default friendly welcome message from the bot
- ✅ Markdown support in bot responses
- ✅ Smooth auto-scroll and typing indicator
- ✅ Responsive, clean, modern UI
- ✅ Easy project setup and extensibility

---

## 🖥️ Tech Stack

- **Frontend:** React.js, React Markdown, Axios
- **Backend:** Node.js, Express.js
- **AI Integration:** (Customizable — OpenAI, Gemini, etc.)
- **Styling:** Custom CSS (inline and class-based)

---

## 📦 Project Structure

```
📂 Project Structure
├── backend
│   ├── index.js          # Main backend server file
│   ├── routes/           # API routes
│   ├── controllers/      # Logic for handling requests
│   ├── models/           # Data models (if applicable)
│   ├── .env              # Environment variables
│   └── package.json      # Backend dependencies
│
├── frontend
│   ├── src/
│   │   ├── components/   # React components
│   │   ├── pages/        # Page components
│   │   ├── App.js        # Main React app file
│   │   ├── index.js      # React entry point
│   └── package.json      # Frontend dependencies
│
├── assets/               # Images, GIFs, and other assets
├── README.md             # Project documentation
└── .gitignore            # Ignored files and folders
```

---

## ⚙️ Getting Started

Follow these steps to set up the project on your local machine.

### 1. Install Prerequisites

Make sure you have **Node.js** installed:

- [Download Node.js](https://nodejs.org/)
- Verify installation:

```bash
node -v
npm -v
```

### 2. Clone the Repository

```bash
git clone https://github.com/VineetSunku/AI-chat-bot
cd your-repo-name
```

### 3. Set up the Backend

```bash
cd backend
npm install
```

#### (Optional) Create Environment Variables

If you're using an external AI API, create a `.env` file inside the `backend` directory:

```ini
API_KEY=your_ai_api_key
```

Start the backend server:

```bash
npm start
```

Your backend will be running at: `http://localhost:5000`

### 4. Set up the Frontend

Open a new terminal tab:

```bash
cd frontend
npm install
npm start
```

Your frontend will be running at: `http://localhost:3000`

### 5. Start Chatting 🎉

Visit: `http://localhost:3000`  
Your AI Assistant is ready to chat!

---

## 🔑 API Key Setup

If you're using a service like OpenAI or Google Gemini:

1. Get your API key from the service provider.
2. Add it to your `.env` file in the `backend` directory:

    ```ini
    API_KEY=your_api_key_here
    ```

3. In your `backend/index.js`, make sure the API is connected properly. Example for OpenAI:

    ```javascript
    const apiKey = process.env.API_KEY;
    ```

---


