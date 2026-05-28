# 🏋️ OctoFit Tracker

A modern multi-tier fitness tracking application built with GitHub Copilot Agent Mode.

## 📁 Project Structure

```
octofit-tracker/
├── frontend/          # React 19 + Vite application (Port 5173)
├── backend/           # Node.js + Express + TypeScript API (Port 8000)
└── .env.example       # Environment configuration template
```

## 🚀 Quick Start

### Prerequisites
- Node.js 18+
- MongoDB running on port 27017

### Frontend Setup

```bash
cd octofit-tracker/frontend
npm install
npm run dev
```

Frontend will run on: `http://localhost:5173`

### Backend Setup

```bash
cd octofit-tracker/backend
npm install
npm run dev
```

Backend will run on: `http://localhost:8000`

### MongoDB Setup

Ensure MongoDB is running on port 27017:

```bash
# Using Docker
docker run -d -p 27017:27017 --name mongodb mongo:latest
```

## 🛠 Technologies

### Frontend
- React 19
- Vite
- Modern ES modules

### Backend
- Node.js
- Express.js
- TypeScript
- Mongoose (MongoDB ODM)

## 📋 Ports

- **Frontend**: 5173
- **Backend API**: 8000
- **MongoDB**: 27017

## 🎯 Features

- Exercise tracking
- Fitness analytics
- MongoDB persistence
- RESTful API

## 📝 Environment Variables

Copy `.env.example` to `.env` and configure as needed.

---

Built with ❤️ using GitHub Copilot Agent Mode
