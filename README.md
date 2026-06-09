# Remote Browser Control System
A mini TeamViewer for the browser — built for BLD SDE Intern Assignment.

## What it does
- Click **Start Browser** in the web UI
- A Docker container automatically spins up running Chromium
- The browser screen streams live to your web UI
- You can click, type, scroll and navigate URLs — all remotely

## Tech Stack
- **Frontend:** Next.js, React, Socket.IO Client
- **Backend:** Node.js, Express, Socket.IO, Dockerode
- **Browser Automation:** Playwright
- **Containerization:** Docker

## Project Structure

remote-browser/
├── backend/           # Node.js server, manages Docker containers
├── frontend/          # Next.js web UI
└── browser-container/ # Playwright server that runs inside Docker

## How to Run

### Prerequisites
- Node.js
- Docker Desktop (running)

### 1. Build the browser container image
```bash
cd browser-container
npm install
docker build -t browser-container .
```

### 2. Start the backend
```bash
cd backend
npm install
node index.js
```

### 3. Start the frontend
```bash
cd frontend
npm install
npm run dev
```

### 4. Open http://localhost:3000 and click Start Browser!

## How it works
1. User clicks Start Browser in the UI
2. Backend uses Dockerode to dynamically spawn a `browser-container` Docker container
3. Playwright inside the container launches Chromium and opens Google
4. Backend takes screenshots every 100ms and streams them via WebSocket
5. User interactions (clicks, typing, scrolling) are forwarded to Playwright
6. Container auto-destroys when user disconnects
