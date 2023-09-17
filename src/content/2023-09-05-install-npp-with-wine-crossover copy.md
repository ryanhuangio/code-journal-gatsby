---
title: "Install Notepad++ with Wine Crossover on Apple Silicon MacOS"
slug: "install-npp-with-wine-crossover"
date: "2023-09-05"
---

Notepad++ is one of those amazing apps that exists only on Windows. You can install it using Parallels, but this will allow you to install it without paying for that.

1. Make sure Homebrew is installed.

2. Install Wine Crossover with Homebrew
   `brew install --no-quarantine gcenx/wine/wine-crossover`

3. Double click `Wine Crossover` from `Applications`

4. Enter `winecfg` to configure. Set `Windows Version` to `Windows 10`. Ignore the errors if you see any.

5. Download Notepad++ installer for 64 bit. Double click on it to install through Wine Crossover.

6. To relaunch an app once installed, open `Wine Crossover`. Navigate to your Notepad++ program files directory:
   `cd ~/.wine/drive_c/Program\ Files/Notepad++/`

7. Open the app:
   `wine notepad++.exe`
