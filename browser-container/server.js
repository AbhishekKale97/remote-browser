const express = require("express");
const { chromium } = require("playwright");

const app = express();
app.use(express.json());

let browser = null;
let page = null;

// Start browser and return first screenshot
app.post("/start", async (req, res) => {
  browser = await chromium.launch({ headless: true });
  const context = await browser.newContext({
    viewport: { width: 1280, height: 720 }
  });
  page = await context.newPage();
  await page.goto("https://www.google.com");
  const screenshot = await page.screenshot({ type: "jpeg", quality: 60 });
  res.json({ screenshot: screenshot.toString("base64") });
});

// Take and return a screenshot
app.get("/screenshot", async (req, res) => {
  if (!page) return res.status(400).json({ error: "Browser not started" });
  const screenshot = await page.screenshot({ type: "jpeg", quality: 60 });
  res.json({ screenshot: screenshot.toString("base64") });
});

// Click
app.post("/click", async (req, res) => {
  const { x, y } = req.body;
  await page.mouse.click(x, y);
  res.json({ ok: true });
});

// Type
app.post("/type", async (req, res) => {
  const { text } = req.body;
  await page.keyboard.type(text);
  res.json({ ok: true });
});

// Key press
app.post("/keypress", async (req, res) => {
  const { key } = req.body;
  await page.keyboard.press(key);
  res.json({ ok: true });
});

// Scroll
app.post("/scroll", async (req, res) => {
  const { deltaY } = req.body;
  await page.mouse.wheel(0, deltaY);
  res.json({ ok: true });
});

// Navigate
app.post("/navigate", async (req, res) => {
  const { url } = req.body;
  await page.goto(url.startsWith("http") ? url : `https://${url}`);
  res.json({ ok: true });
});

// Stop browser
app.post("/stop", async (req, res) => {
  if (browser) await browser.close();
  browser = null;
  page = null;
  res.json({ ok: true });
  process.exit(0); // container shuts down
});

app.listen(5000, () => console.log("Browser container ready on port 5000"));