(globalThis["TURBOPACK"] || (globalThis["TURBOPACK"] = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/app/page.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Home
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$socket$2e$io$2d$client$2f$build$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/socket.io-client/build/esm/index.js [app-client] (ecmascript) <locals>");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
function Home() {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(22);
    if ($[0] !== "c072571e1447e56e2a5d33a4a2e07ad062771966da8c8aae1d95c4d2318bc2b4") {
        for(let $i = 0; $i < 22; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "c072571e1447e56e2a5d33a4a2e07ad062771966da8c8aae1d95c4d2318bc2b4";
    }
    const canvasRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const socketRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const [status, setStatus] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("idle");
    const [url, setUrl] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("https://www.google.com");
    let t0;
    let t1;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t0 = ({
            "Home[useEffect()]": ()=>{
                socketRef.current = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$socket$2e$io$2d$client$2f$build$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["io"])("http://localhost:4000");
                socketRef.current.on("browser-started", {
                    "Home[useEffect() > socketRef.current.on()]": ()=>{
                        setStatus("running");
                    }
                }["Home[useEffect() > socketRef.current.on()]"]);
                socketRef.current.on("screenshot", {
                    "Home[useEffect() > socketRef.current.on()]": (base64)=>{
                        const img = new Image();
                        img.onload = ()=>{
                            const canvas = canvasRef.current;
                            if (!canvas) {
                                return;
                            }
                            const ctx = canvas.getContext("2d");
                            ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
                        };
                        img.src = `data:image/jpeg;base64,${base64}`;
                    }
                }["Home[useEffect() > socketRef.current.on()]"]);
                return ()=>socketRef.current.disconnect();
            }
        })["Home[useEffect()]"];
        t1 = [];
        $[1] = t0;
        $[2] = t1;
    } else {
        t0 = $[1];
        t1 = $[2];
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(t0, t1);
    let t2;
    if ($[3] === Symbol.for("react.memo_cache_sentinel")) {
        t2 = ({
            "Home[startBrowser]": ()=>{
                setStatus("loading");
                socketRef.current.emit("start-browser");
            }
        })["Home[startBrowser]"];
        $[3] = t2;
    } else {
        t2 = $[3];
    }
    const startBrowser = t2;
    let t3;
    if ($[4] === Symbol.for("react.memo_cache_sentinel")) {
        t3 = ({
            "Home[handleCanvasClick]": (e)=>{
                const canvas_0 = canvasRef.current;
                const rect = canvas_0.getBoundingClientRect();
                const x = (e.clientX - rect.left) / rect.width * 1280;
                const y = (e.clientY - rect.top) / rect.height * 720;
                socketRef.current.emit("click", {
                    x,
                    y
                });
            }
        })["Home[handleCanvasClick]"];
        $[4] = t3;
    } else {
        t3 = $[4];
    }
    const handleCanvasClick = t3;
    let t4;
    if ($[5] === Symbol.for("react.memo_cache_sentinel")) {
        t4 = ({
            "Home[handleKeyDown]": (e_0)=>{
                const specialKeys = [
                    "Enter",
                    "Backspace",
                    "Tab",
                    "ArrowUp",
                    "ArrowDown",
                    "ArrowLeft",
                    "ArrowRight"
                ];
                if (specialKeys.includes(e_0.key)) {
                    e_0.preventDefault();
                    socketRef.current.emit("keypress", {
                        key: e_0.key
                    });
                } else {
                    if (e_0.key.length === 1) {
                        socketRef.current.emit("type", {
                            text: e_0.key
                        });
                    }
                }
            }
        })["Home[handleKeyDown]"];
        $[5] = t4;
    } else {
        t4 = $[5];
    }
    const handleKeyDown = t4;
    let t5;
    if ($[6] === Symbol.for("react.memo_cache_sentinel")) {
        t5 = ({
            "Home[handleScroll]": (e_1)=>{
                const canvas_1 = canvasRef.current;
                const rect_0 = canvas_1.getBoundingClientRect();
                const x_0 = (e_1.clientX - rect_0.left) / rect_0.width * 1280;
                const y_0 = (e_1.clientY - rect_0.top) / rect_0.height * 720;
                socketRef.current.emit("scroll", {
                    x: x_0,
                    y: y_0,
                    deltaY: e_1.deltaY
                });
            }
        })["Home[handleScroll]"];
        $[6] = t5;
    } else {
        t5 = $[6];
    }
    const handleScroll = t5;
    let t6;
    if ($[7] !== url) {
        t6 = ({
            "Home[handleNavigate]": (e_2)=>{
                e_2.preventDefault();
                socketRef.current.emit("navigate", {
                    url
                });
            }
        })["Home[handleNavigate]"];
        $[7] = url;
        $[8] = t6;
    } else {
        t6 = $[8];
    }
    const handleNavigate = t6;
    let t7;
    if ($[9] === Symbol.for("react.memo_cache_sentinel")) {
        t7 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
            className: "text-3xl font-bold mb-4",
            children: "🖥️ Remote Browser"
        }, void 0, false, {
            fileName: "[project]/app/page.js",
            lineNumber: 148,
            columnNumber: 10
        }, this);
        $[9] = t7;
    } else {
        t7 = $[9];
    }
    let t8;
    if ($[10] !== status) {
        t8 = status === "idle" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
            onClick: startBrowser,
            className: "bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg text-lg font-semibold",
            children: "Start Browser"
        }, void 0, false, {
            fileName: "[project]/app/page.js",
            lineNumber: 155,
            columnNumber: 31
        }, this);
        $[10] = status;
        $[11] = t8;
    } else {
        t8 = $[11];
    }
    let t9;
    if ($[12] !== status) {
        t9 = status === "loading" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "text-yellow-400 text-lg",
            children: "⏳ Launching browser..."
        }, void 0, false, {
            fileName: "[project]/app/page.js",
            lineNumber: 163,
            columnNumber: 34
        }, this);
        $[12] = status;
        $[13] = t9;
    } else {
        t9 = $[13];
    }
    let t10;
    if ($[14] !== handleNavigate || $[15] !== status || $[16] !== url) {
        t10 = status === "running" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex flex-col items-center gap-3 w-full max-w-5xl",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                    onSubmit: handleNavigate,
                    className: "flex w-full gap-2",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                            type: "text",
                            value: url,
                            onChange: {
                                "Home[<input>.onChange]": (e_3)=>setUrl(e_3.target.value)
                            }["Home[<input>.onChange]"],
                            className: "flex-1 px-4 py-2 rounded-lg bg-gray-700 text-white border border-gray-500 focus:outline-none",
                            placeholder: "Enter URL..."
                        }, void 0, false, {
                            fileName: "[project]/app/page.js",
                            lineNumber: 171,
                            columnNumber: 164
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            type: "submit",
                            className: "bg-green-600 hover:bg-green-700 px-5 py-2 rounded-lg font-semibold",
                            children: "Go"
                        }, void 0, false, {
                            fileName: "[project]/app/page.js",
                            lineNumber: 173,
                            columnNumber: 172
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/page.js",
                    lineNumber: 171,
                    columnNumber: 102
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("canvas", {
                    ref: canvasRef,
                    width: 1280,
                    height: 720,
                    onClick: handleCanvasClick,
                    onKeyDown: handleKeyDown,
                    onWheel: handleScroll,
                    tabIndex: 0,
                    className: "w-full rounded-lg border-2 border-gray-600 cursor-pointer focus:outline-none focus:border-blue-500",
                    style: {
                        aspectRatio: "16/9"
                    }
                }, void 0, false, {
                    fileName: "[project]/app/page.js",
                    lineNumber: 173,
                    columnNumber: 291
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-gray-400 text-sm",
                    children: "Click on the browser above to interact. Click first to focus, then type."
                }, void 0, false, {
                    fileName: "[project]/app/page.js",
                    lineNumber: 175,
                    columnNumber: 12
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/app/page.js",
            lineNumber: 171,
            columnNumber: 35
        }, this);
        $[14] = handleNavigate;
        $[15] = status;
        $[16] = url;
        $[17] = t10;
    } else {
        t10 = $[17];
    }
    let t11;
    if ($[18] !== t10 || $[19] !== t8 || $[20] !== t9) {
        t11 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
            className: "min-h-screen bg-gray-900 text-white flex flex-col items-center p-6",
            children: [
                t7,
                t8,
                t9,
                t10
            ]
        }, void 0, true, {
            fileName: "[project]/app/page.js",
            lineNumber: 185,
            columnNumber: 11
        }, this);
        $[18] = t10;
        $[19] = t8;
        $[20] = t9;
        $[21] = t11;
    } else {
        t11 = $[21];
    }
    return t11;
}
_s(Home, "dk2qt9yWlJ4VIXC+Jz8rgNEuO1I=");
_c = Home;
var _c;
__turbopack_context__.k.register(_c, "Home");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=app_page_1thsms_.js.map