---
title: "Change Node Version"
slug: "change-node-version"
date: "2023-07-06"
---

Change the version of Node using `n` or `nvm`.

### Change Node version using N
1. Globally install n `npm install -g n`
2. Change to Node.js 18 `n 18`
3. `node -v`

### Change Node version using NVM
1. Download `curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.3/install.sh | bash`
2. Install `source ~/.bashrc`
3. List available Node.js versions `nvm list-remote` and it will show an exhaustive list like this:

```
# nvm list-remote
        v0.1.14
        v0.1.15
        v0.1.16
        v0.1.17
        v0.1.18
...
      v17.8.0
        v17.9.0
        v17.9.1
        v18.0.0
        v18.1.0
        v18.2.0
        v18.3.0
        v18.4.0
        v18.5.0
        v18.6.0
        v18.7.0
        v18.8.0
        v18.9.0
        v18.9.1
       v18.10.0
       v18.11.0
       v18.12.0   (LTS: Hydrogen)
       v18.12.1   (LTS: Hydrogen)
       v18.13.0   (LTS: Hydrogen)
       v18.14.0   (LTS: Hydrogen)
       v18.14.1   (LTS: Hydrogen)
       v18.14.2   (LTS: Hydrogen)
       v18.15.0   (LTS: Hydrogen)
       v18.16.0   (LTS: Hydrogen)
       v18.16.1   (Latest LTS: Hydrogen)
        v19.0.0
        v19.0.1
        v19.1.0
        v19.2.0
        v19.3.0
        v19.4.0
        v19.5.0
        v19.6.0
        v19.6.1
        v19.7.0
        v19.8.0
        v19.8.1
        v19.9.0
        v20.0.0
        v20.1.0
        v20.2.0
        v20.3.0
        v20.3.1
```

## 
4. Clean npm cache `npm cache clean --force`
5. Install the version of Node `nvm install 18.16.1`
6. Enable it `nvm use 18.16.1`
7. `node -v`