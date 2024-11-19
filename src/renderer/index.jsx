import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";

// React가 렌더링할 컨테이너 요소
const container = document.getElementById("root");

// React 18의 createRoot 사용
const root = createRoot(container);
root.render(<App />);
