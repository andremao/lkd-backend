const { app, BrowserWindow } = require('electron')

;(async () => {
  await app.whenReady()

  let mainWindow = new BrowserWindow({
    width: 1200,
    height: 600,
    webPreferences: {
      nodeIntegration: true
    }
  })

  mainWindow.on('closed', () => {
    mainWindow = null
  })

  const isDev = require('electron-is-dev')

  mainWindow.loadURL(isDev ? 'http://localhost:3000' : 'fakeurl')
})()
