const express = require("express");
const http = require("http");
const { Server } = require("socket.io");
const Docker = require("dockerode");
const fetch = (...args) => import("node-fetch").then(({ default: f }) => f(...args));

const app = express();
const server = http.createServer(app);
const docker = new Docker({ socketPath: "\\\\.\\pipe\\dockerDesktopLinuxEngine" });

const io = new Server(server, {
  cors: { origin: "http://localhost:3000", methods: ["GET", "POST"] }
});

let container = null;
let containerPort = null;
let screenshotInterval = null;

// Find a free port
function getFreePort() {
  return new Promise((resolve) => {
    const net = require("net");
    const srv = net.createServer();
    srv.listen(0, () => {
      const port = srv.address().port;
      srv.close(() => resolve(port));
    });
  });
}

// Wait until browser container is ready
async function waitForContainer(port, retries = 20) {
  for (let i = 0; i < retries; i++) {
    try {
      const res = await fetch(`http://localhost:${port}/screenshot`);
      if (res.ok) return true;
    } catch (_) {}
    await new Promise(r => setTimeout(r, 500));
  }
  throw new Error("Container did not become ready in time");
}

async function streamScreenshot(port) {
  try {
    const res = await fetch(`http://localhost:${port}/screenshot`);
    const data = await res.json();
    io.emit("screenshot", data.screenshot);
  } catch (err) {
    console.error("Screenshot error:", err.message);
  }
}

io.on("connection", (socket) => {
  console.log("Frontend connected:", socket.id);

  socket.on("start-browser", async () => {
    try {
      console.log("Spawning browser container...");
      containerPort = await getFreePort();

      // Pull image if needed and create container
      container = await docker.createContainer({
        Image: "browser-container",
        ExposedPorts: { "5000/tcp": {} },
        HostConfig: {
          PortBindings: { "5000/tcp": [{ HostPort: String(containerPort) }] }
        },
        AutoRemove: true
      });

      await container.start();
console.log(`Container started on port ${containerPort}`);

// Wait for container HTTP server to be ready
console.log("Waiting for container to be ready...");
await new Promise(r => setTimeout(r, 3000));

// Retry /start up to 10 times
let started = false;
for (let i = 0; i < 10; i++) {
  try {
    const res = await fetch(`http://localhost:${containerPort}/start`, { method: "POST" });
    if (res.ok) { started = true; break; }
  } catch (e) {
    console.log(`Retrying /start (${i + 1}/10)...`);
    await new Promise(r => setTimeout(r, 1000));
  }
}

if (!started) throw new Error("Browser container failed to start after retries");
console.log("Browser started inside container");

      socket.emit("browser-started");

      // Stream screenshots every 100ms
      screenshotInterval = setInterval(() => streamScreenshot(containerPort), 100);

    } catch (err) {
      console.error("Failed to start container:", err.message);
      socket.emit("error", err.message);
    }
  });

  socket.on("click", async ({ x, y }) => {
    if (!containerPort) return;
    await fetch(`http://localhost:${containerPort}/click`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ x, y })
    });
  });

  socket.on("type", async ({ text }) => {
    if (!containerPort) return;
    await fetch(`http://localhost:${containerPort}/type`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ text })
    });
  });

  socket.on("keypress", async ({ key }) => {
    if (!containerPort) return;
    await fetch(`http://localhost:${containerPort}/keypress`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ key })
    });
  });

  socket.on("scroll", async ({ deltaY }) => {
    if (!containerPort) return;
    await fetch(`http://localhost:${containerPort}/scroll`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ deltaY })
    });
  });

  socket.on("navigate", async ({ url }) => {
    if (!containerPort) return;
    await fetch(`http://localhost:${containerPort}/navigate`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ url })
    });
  });

  socket.on("disconnect", async () => {
    console.log("Frontend disconnected, stopping container...");
    if (screenshotInterval) clearInterval(screenshotInterval);
    if (container) {
      try {
        await fetch(`http://localhost:${containerPort}/stop`, { method: "POST" });
      } catch (_) {}
      container = null;
      containerPort = null;
    }
  });
});

server.listen(4000, () => console.log("Backend running at http://localhost:4000"));