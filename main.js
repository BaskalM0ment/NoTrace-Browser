const win = new BrowserWindow({
  width: 1200,
  height: 800,
  title: "NoTrace Browser",
  webPreferences: {
    preload: path.join(__dirname, 'preload.js'),
    contextIsolation: true,
    nodeIntegration: false,
    sandbox: true,
    webviewTag: true
  }
});
