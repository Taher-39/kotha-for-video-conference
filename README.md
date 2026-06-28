# 🎥 Kotha — Video Conference App

> A Zoom-like video conferencing web app with real-time video calls, chat, and screen sharing — built with React, TypeScript, Firebase, and ZegoCloud.

💻 **Repository:** [github.com/Taher-39/kotha-for-video-conference](https://github.com/Taher-39/kotha-for-video-conference)

---

## 📖 Overview

**Kotha** is a full-featured video conferencing application inspired by Zoom. Users can create or join meeting rooms, communicate via video/audio calls, chat in real-time, and share their screen — all in the browser without any installation.

---

## ✨ Key Features

- 📹 Real-time video & audio calling
- 💬 In-meeting chat
- 🖥️ Screen sharing
- 🔐 Firebase authentication (login/signup)
- 🏠 Create & join meeting rooms instantly
- 👥 Multiple participants support
- 📱 Responsive design

---

## ⚙️ Tech Stack

| Layer | Technologies |
|-------|-------------|
| Frontend | React 17, TypeScript, React Router v6 |
| UI Library | Elastic UI (EUI), Emotion CSS |
| State Management | Redux Toolkit, React Redux |
| Video/Audio | ZegoCloud UIKit Prebuilt |
| Authentication | Firebase v9 |
| Deployment | Netlify |
| Language | TypeScript |

---

## 📦 Key Dependencies

```json
{
  "@zegocloud/zego-uikit-prebuilt": "real-time video conferencing",
  "firebase": "authentication & database",
  "@reduxjs/toolkit": "state management",
  "@elastic/eui": "UI component library",
  "react-router-dom": "routing",
  "typescript": "type safety"
}
```

---

## 🚀 Run Locally

### Prerequisites
- Node.js v16+
- Firebase project credentials
- ZegoCloud App ID & Server Secret

### Setup

```bash
# Clone the repository
git clone https://github.com/Taher-39/kotha-for-video-conference.git
cd kotha-for-video-conference

# Install dependencies
npm install
```

### Environment Variables

Create a `.env` file in the root:

```env
REACT_APP_FIREBASE_API_KEY=your_firebase_api_key
REACT_APP_FIREBASE_AUTH_DOMAIN=your_auth_domain
REACT_APP_FIREBASE_PROJECT_ID=your_project_id
REACT_APP_FIREBASE_STORAGE_BUCKET=your_storage_bucket
REACT_APP_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
REACT_APP_FIREBASE_APP_ID=your_app_id
REACT_APP_ZEGO_APP_ID=your_zego_app_id
REACT_APP_ZEGO_SERVER_SECRET=your_zego_server_secret
```

### Start the App

```bash
npm start
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## 🔗 Relevant Links

| Resource | Link |
|----------|------|
| 👤 Developer Portfolio | [abu-taher-portfolio.vercel.app](https://abu-taher-portfolio.vercel.app) |
| 💼 LinkedIn | [linkedin.com/in/taher39](https://linkedin.com/in/taher39) |
| 📧 Email | taherpust@gmail.com |

---

> Built with ❤️ by [Abu Taher](https://abu-taher-portfolio.vercel.app)
