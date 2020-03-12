const { app, BrowserWindow } = require('electron')
const isDev = require('electron-is-dev')

const { join } = require('path')

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

  mainWindow.loadURL(isDev ? 'http://localhost:3000' : `file://${join(__dirname, '../build/index.html')}`)
})()
