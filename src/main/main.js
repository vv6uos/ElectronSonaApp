//Electron 메인 프로세스

const { app, BrowserWindow } = require("electron");
const path = require("path");

let mainWindow;

app.on("ready", () => {
  mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      preload: path.join(__dirname, "preload.js"), // 필요시 추가
      nodeIntegration: true,
    },
  });

  mainWindow.loadURL("http://localhost:3000"); // React 개발 서버
});
