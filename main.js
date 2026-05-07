const path = require("path");
const { app, BrowserWindow } = require("electron");

function createWindow() {
  const win = new BrowserWindow({
    width: 1200,
    height: 800,
    frame: false,
    icon: path.join(__dirname, "assets/icon.ico"),    
      webPreferences: {
      nodeIntegration: true,
      contextIsolation: false,
      webviewTag: true   // REQUIRED
    }
  });

  win.loadFile("index.html");
}
const { ipcMain } = require("electron");

ipcMain.on("minimize", (e) => {
  BrowserWindow.fromWebContents(e.sender).minimize();
});

ipcMain.on("maximize", (e) => {
  const win = BrowserWindow.fromWebContents(e.sender);
  if (win.isMaximized()) win.unmaximize();
  else win.maximize();
});

ipcMain.on("close", (e) => {
  BrowserWindow.fromWebContents(e.sender).close();
});

app.whenReady().then(createWindow);
