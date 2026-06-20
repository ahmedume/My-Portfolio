# 🚀 Local Development Setup Guide

This portfolio website is built using **React (with Vite)** on the frontend and an **Express server** on the backend to safely handle queries to the **Groq API** without exposing your api key to the browser.

Follow these simple steps to run this project smoothly on your local machine.

---

## 📋 Prerequisites

Before starting, ensure you have the following installed:
*   [Node.js](https://nodejs.org/) (Recommended: **v18** or newer)
*   [npm](https://www.npmjs.com/) (Node Package Manager, installed automatically with Node.js)

---

## 🛠️ Step-by-Step Installation

### Step 1: Open the Project Directory
Extract the downloaded ZIP archive and open a terminal (or visual studio code terminal) at the root folder of the project.

### Step 2: Install Dependencies
Run the following command to download and install all necessary npm packages:
```bash
npm install
```

### Step 3: Configure Environment Variables
1. A `.env` file should be present in the root folder. If it is missing, copy `.env.example` and rename it to `.env`:
   ```bash
   cp .env.example .env
   ```
2. Open the `.env` file in your text editor and paste your **Groq API Key**:
   ```env
   # Replace the placeholder text with your actual Groq API key from https://console.groq.com
   GROQ_API_KEY="gsk_your_actual_groq_api_key_here"

   # App URL (Keep it as http://localhost:3000 for local development)
   APP_URL="http://localhost:3000"
   ```

---

## ⚡ Running the Application

### Option A: Development Mode (Recommended)
This runs the application in development mode with active server logging and hot-reloading for code modifications:
```bash
npm run dev
```
Once started, open your web browser and navigate to:
👉 **[http://localhost:3000](http://localhost:3000)**

---

### Option B: Production Build (Simulate Live Deployment)
To bundle the frontend application assets and compile the TypeScript backend server for production, follow these steps:

1. **Build the assets:**
   ```bash
   npm run build
   ```
   *This commands bundles the React app of Vite inside `dist/index.html` and compiles `server.ts` into a fast, standalone backend CommonJS server file at `dist/server.cjs`.*

2. **Start the production server:**
   ```bash
   npm run start
   ```
Once running, navigate to:
👉 **[http://localhost:3000](http://localhost:3000)**

---

## 🔍 Troubleshooting & Key Notes

*   **Groq API Key Required:** If the Chatbot says *"I am ready to chat, but your Groq API Key is not configured yet!"*, double-check that your `.env` contains your correct key and that you restarted your local terminal process after updating the `.env` file.
*   **Port 3000 Conflict:** The developer server binds to port `3000` by default. If another application on your computer is already using port `3000`, the terminal will show an `"Address already in use"` error. You can terminate the other app or modify the `PORT = 3000` declaration in `server.ts`.
*   **Frontend-Backend Sync:** Because this project uses an Express backend to serve the React assets as well as process `/api/chat` requests, running **both** is handled in one singular execution flow (`npm run dev` or `npm run start`). No need to run frontend and backend processes separately!
