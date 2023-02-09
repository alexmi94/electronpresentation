const { app, BrowserWindow, ipcMain, powerMonitor } = require('electron')

const createWindow = () => {
    const win = new BrowserWindow({
      width: 1000,
      height: 700,
      webPreferences: {
        nodeIntegration: true,
        contextIsolation: false,
    }
    })
  
    win.loadFile('./src/index.html')
    win.webContents.openDevTools()

    
  }

  app.whenReady().then(() => {
    createWindow()
    
  })

  app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') app.quit()
  })


  // fonction


  ipcMain.handle('batterie-status',  async (event) => {

    return powerMonitor.isOnBatteryPower();
  });

