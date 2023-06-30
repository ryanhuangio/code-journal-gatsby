---
title: "Building a Simple Cross Platform Desktop App Using Electron"
slug: "build-simple-desktop-app-electron"
date: "2021-07-25"
---

Electron, or Electron.js, is a cross platform desktop application development framework. Electron embeds Chromium and Node.js to allow writing your apps with HTML, CSS and JavaScript.

Build a simple cross platform desktop application using [Electron's quick start repo](https://github.com/electron/electron-quick-start)

To build and run this app:

1. `git clone https://github.com/electron/electron-quick-start`

2. `cd electron-quick-start`

3. `npm install `

4. Replace the files.

5. `npm run start` or `npm run-script build`

### index.php

```
<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8">
    <!-- https://developer.mozilla.org/en-US/docs/Web/HTTP/CSP -->
    <meta http-equiv="Content-Security-Policy" content="default-src 'self'; script-src 'self'">
    <title>PR Distribution™</title>
	<link rel="shortcut icon" href="favicon.ico" />
	<link rel="stylesheet" href="app.css" />
	  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <link href="tailwind.css" rel="stylesheet">
  </head>
  <body class="p-5">
    <h1 class="text-3xl font-bold mb-3">PR Distribution™</h1>
	<p>PR Distribution™ is the leading global press release distribution platform with 18+ years of senior management experience in PR & marketing.</p>
	<img src="prd.png" class="block rounded shadow-lg mt-6 mb-10"/>
	<a href="https://www.prdistribution.com" class="transition duration-300 ease-in-out inline-block rounded shadow hover:bg-red-600 px-3 py-1 hover:text-white border-solid border-2 border-red-600 bg-white text-red-600">PR Distribution™</a>
	<a href="https://www.prdistribution.com/news" class="transition duration-300 ease-in-out inline-block rounded shadow hover:bg-red-600 px-3 py-1 hover:text-white border-solid border-2 border-red-600 bg-white text-red-600">News</a>
	<a href="https://www.prdistribution.com/pricing" class="transition duration-300 ease-in-out inline-block rounded shadow hover:bg-red-600 px-3 py-1 hover:text-white border-solid border-2 border-red-600 bg-white text-red-600">Solutions & Pricing</a>
	<a href="https://www.prdistribution.com/contact" class="transition duration-300 ease-in-out inline-block rounded shadow hover:bg-red-600 px-3 py-1 hover:text-white border-solid border-2 border-red-600 bg-white text-red-600">Contact</a>
    <script src="./renderer.js"></script>
  </body>
</html>
```

### main.js
```
// Modules to control application life and create native browser window
const {app, BrowserWindow} = require('electron')
const path = require('path')


function createWindow () {
  // Create the browser window.
  const mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
	icon: path.join('favicon.ico'),
    webPreferences: {
      preload: path.join(__dirname, 'preload.js')
    }
  })

  // and load the index.html of the app.
  mainWindow.loadFile('index.html')

  // Open the DevTools.
  // mainWindow.webContents.openDevTools()
}

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.whenReady().then(() =&gt; {
  createWindow()

  app.on('activate', function () {
    // On macOS it's common to re-create a window in the app when the
    // dock icon is clicked and there are no other windows open.
    if (BrowserWindow.getAllWindows().length === 0) createWindow()
  })
})

// Quit when all windows are closed, except on macOS. There, it's common
// for applications and their menu bar to stay active until the user quits
// explicitly with Cmd + Q.
app.on('window-all-closed', function () {
  if (process.platform !== 'darwin') app.quit()
})

// In this file you can include the rest of your app's specific main process
// code. You can also put them in separate files and require them here.
```

### app.css
```
@font-face {
	font-family: "Montserrat";
	src: url("node_modules/typeface-montserrat/filesmontserrat-latin-200.woff2") format("woff");
	font-weight: thin;
}
@font-face {
	font-family: "Montserrat";
	src: url("node_modules/typeface-montserrat/filesmontserrat-latin-400.woff2") format("woff");
	font-weight: normal;
}
@font-face {
	font-family: "Montserrat";
	src: url("node_modules/typeface-montserrat/filesmontserrat-latin-700.woff2") format("woff");
	font-weight: bold;
}
@font-face {
	font-family: "Montserrat";
	src: url("node_modules/typeface-montserrat/filesmontserrat-latin-900.woff2") format("woff");
	font-weight: extrabold;
}
body {font-family: "Montserrat";}
```

### package.json
```
{
  "name": "PRDistribution",
  "version": "1.0.0",
  "description": "A basic prototype of a PR Distribution desktop app",
  "main": "main.js",
  "scripts": {
    "start": "electron . --icon=favicon.ico",
    "build": "electron-packager . --icon=favicon.ico"
  },
  "repository": "https://github.com/electron/electron-quick-start",
  "keywords": [
    "PRDistribution"
  ],
  "author": "GitHub",
  "license": "CC0-1.0",
  "devDependencies": {
    "electron": "^13.1.7"
  },
  "dependencies": {
    "electron-forge": "^5.2.4",
    "electron-packager": "^15.3.0",
    "material-design-icons": "^3.0.1",
    "typeface-montserrat": "^1.1.13"
  }
}
```