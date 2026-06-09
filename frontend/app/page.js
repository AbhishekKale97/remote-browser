"use client";
import { useEffect, useRef, useState } from "react";
import { io } from "socket.io-client";

export default function Home() {
  const canvasRef = useRef(null);
  const socketRef = useRef(null);
  const [status, setStatus] = useState("idle"); // idle | loading | running
  const [url, setUrl] = useState("https://www.google.com");

  useEffect(() => {
    // Connect to backend
    socketRef.current = io("http://localhost:4000");

    socketRef.current.on("browser-started", () => {
      setStatus("running");
    });

    // When a screenshot arrives, draw it on the canvas
    socketRef.current.on("screenshot", (base64) => {
      const img = new Image();
      img.onload = () => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext("2d");
        ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
      };
      img.src = `data:image/jpeg;base64,${base64}`;
    });

    return () => socketRef.current.disconnect();
  }, []);

  const startBrowser = () => {
    setStatus("loading");
    socketRef.current.emit("start-browser");
  };

  const handleCanvasClick = (e) => {
    const canvas = canvasRef.current;
    const rect = canvas.getBoundingClientRect();
    // Scale click coords to match 1280x720 browser
    const x = ((e.clientX - rect.left) / rect.width) * 1280;
    const y = ((e.clientY - rect.top) / rect.height) * 720;
    socketRef.current.emit("click", { x, y });
  };

  const handleKeyDown = (e) => {
    // Special keys
    const specialKeys = ["Enter", "Backspace", "Tab", "ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight"];
    if (specialKeys.includes(e.key)) {
      e.preventDefault();
      socketRef.current.emit("keypress", { key: e.key });
    } else if (e.key.length === 1) {
      socketRef.current.emit("type", { text: e.key });
    }
  };

  const handleScroll = (e) => {
    const canvas = canvasRef.current;
    const rect = canvas.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 1280;
    const y = ((e.clientY - rect.top) / rect.height) * 720;
    socketRef.current.emit("scroll", { x, y, deltaY: e.deltaY });
  };

  const handleNavigate = (e) => {
    e.preventDefault();
    socketRef.current.emit("navigate", { url });
  };

  return (
    <main className="min-h-screen bg-gray-900 text-white flex flex-col items-center p-6">
      <h1 className="text-3xl font-bold mb-4">🖥️ Remote Browser</h1>

      {status === "idle" && (
        <button
          onClick={startBrowser}
          className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg text-lg font-semibold"
        >
          Start Browser
        </button>
      )}

      {status === "loading" && (
        <p className="text-yellow-400 text-lg">⏳ Launching browser...</p>
      )}

      {status === "running" && (
        <div className="flex flex-col items-center gap-3 w-full max-w-5xl">
          {/* URL bar */}
          <form onSubmit={handleNavigate} className="flex w-full gap-2">
            <input
              type="text"
              value={url}
              onChange={(e) => setUrl(e.target.value)}
              className="flex-1 px-4 py-2 rounded-lg bg-gray-700 text-white border border-gray-500 focus:outline-none"
              placeholder="Enter URL..."
            />
            <button
              type="submit"
              className="bg-green-600 hover:bg-green-700 px-5 py-2 rounded-lg font-semibold"
            >
              Go
            </button>
          </form>

          {/* Browser Canvas */}
          <canvas
            ref={canvasRef}
            width={1280}
            height={720}
            onClick={handleCanvasClick}
            onKeyDown={handleKeyDown}
            onWheel={handleScroll}
            tabIndex={0}
            className="w-full rounded-lg border-2 border-gray-600 cursor-pointer focus:outline-none focus:border-blue-500"
            style={{ aspectRatio: "16/9" }}
          />
          <p className="text-gray-400 text-sm">Click on the browser above to interact. Click first to focus, then type.</p>
        </div>
      )}
    </main>
  );
}