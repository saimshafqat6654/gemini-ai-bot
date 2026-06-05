# AI Chatbot Application

A responsive, web-based chatbot application built using HTML, CSS, and JavaScript. This project integrates an AI language model API while securely handling sensitive credentials using cloud-based serverless functions to prevent exposing the API key on the client side.

## 🚀 Live Demo
* **Netlify Deployment URL:https://6a177629f2e8f5637c528c94--ai-bot112.netlify.app

## ✨ Features
* **Real-time AI Chat:** Interactive UI allowing users to send messages and receive intelligent responses from the AI.
* **Secure API Key Management:** The API key is stored securely in cloud environment variables rather than hardcoded in the frontend JavaScript, eliminating the risk of key exposure.
* **Serverless Backend:** Utilizes cloud functions (Netlify Functions) to route API requests securely.
* **Responsive Design:** A clean, modern chat interface optimized for both desktop and mobile screens.

## 🛠️ Architecture & Security Approach
In standard frontend applications, putting an API key directly inside `script.js` allows anyone inspecting the webpage to steal it. 

To solve this security risk, this project uses a **Reverse Proxy/Serverless** approach:
1. The **Frontend (HTML/CSS/JS)** sends the user's message to a secure cloud function endpoint.
2. The **Cloud Function (Netlify Function)** receives the request, fetches the API key from a secure server-side environment variable, and forwards the request to the AI model API.
3. The AI API responds to the cloud function, which safely passes the data back to the frontend.

## 💻 Technologies Used
* **Frontend:** HTML5, CSS3, JavaScript (ES6+)
* **Deployment & Cloud Hosting:** Netlify
* **Backend Environment:** Node.js (for serverless cloud execution)
* **Security:** Netlify Environment Variables

## 📁 Repository Structure
```text
├── index.html          # Main user interface layout
├── style.css           # Styling and responsive chat layout
├── script.js          # Client-side logic and fetch requests
├── netlify/
│   └── functions/     # Serverless backend functions
│       └── fetchAI.js # Cloud function that hides and attaches the API key
└── README.md          # Project documentation
