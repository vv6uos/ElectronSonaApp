const { app, BrowserWindow } = require("electron");
// const isDev = require("electron-is-dev");
// include the Node.js 'path' module at the top of your file
const path = require("path");
// modify your existing createWindow() function
function createWindow() {
  const win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      preload: path.join(__dirname, "preload.js"),
    },
  });
  // if (isDev) {
  //   mainWindow.loadURL("http://localhost:3000");
  // } else {
  //   mainWindow.loadFile(path.join(__dirname, "../build/index.html"));
  // }
  win.loadURL("http://localhost:3000");
}
// app.on("window-all-closed", () => {
//   if (process.platform !== "darwin") {
//     app.quit();
//   }
// });

// app.on("activate", () => {
//   if (BrowserWindow.getAllWindows().length === 0) {
//     createWindow();
//   }
// });

app.whenReady().then(() => {
  createWindow();
});
app.on("window-all-closed", function () {
  if (process.platform !== "darwin") app.quit();
});
