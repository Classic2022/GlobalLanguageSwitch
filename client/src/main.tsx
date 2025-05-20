import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css";

// Polyfill for process to avoid "process is not defined" error
// @ts-ignore
window.process = { env: {} };

createRoot(document.getElementById("root")!).render(<App />);
