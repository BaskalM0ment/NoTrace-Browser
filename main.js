const { app, BrowserWindow, session } = require('electron');
const path = require('path');
const { autoUpdater } = require('electron-updater');

function createWindow() {
  const win = new BrowserWindow({
    width: 1200,
    height: 800,
    icon: path.join(__dirname, 'assets/icon.ico'),
    webPreferences: {
      preload: path.join(__dirname, 'preload.js'),
      contextIsolation: true,
      nodeIntegration: false,
      sandbox: true,
      webviewTag: true
    }
  });

  win.loadFile('index.html');
}

app.whenReady().then(() => {

  // Basic ad blocking
  session.defaultSession.webRequest.onBeforeRequest((details, callback) => {
    const blocked = ['doubleclick.net', 'googlesyndication.com'];

    if (blocked.some(domain => details.url.includes(domain))) {
      callback({ cancel: true });
    } else {
      callback({});
    }
  });

  // Block permissions
  session.defaultSession.setPermissionRequestHandler((wc, permission, callback) => {
    callback(false);
  });

  // Disable tracking features
  app.commandLine.appendSwitch('disable-features', 'InterestCohort');

  createWindow();

  autoUpdater.checkForUpdatesAndNotify();
});

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit();
});
