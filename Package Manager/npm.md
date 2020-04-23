### NPM Install Globally: 
```js
npm install -g npm
```

### NPM to create package.json: 
```js
npm init
npm init -y
npm init --yes
```

### NPM to create package-lock.json: 
```js
While installing a node module, this will automatically be created. (npm version > 4)
```

### NPM set config:
```js
npm config set init-author-name "Akshaya"
npm config set init-license "MIT"
```

### NPM get config:
```js
npm get init-author-name
```

### NPM delete config:
```js
npm config delete init-license
```

### NPM Install Node Module:
```js
npm install lodash
npm install lodash --save
```

### NPM Uninstall Node Module:
```js
npm uninstall lodash
npm uninstall lodash --save
npm remove lodash --save
npm rm lodash --save
```

### NPM Install Node Module for devDependencies:
```js
npm install gulp gulp-sass --save-dev
```

### NPM Uninstall Node Module from devDependencies:
```js
npm uninstall gulp gulp-sass --save-dev
```

### NPM install certain version:
```js
npm install lodash@4.17.3 --save
```

### NPM update Module:
```js
npm update lodash --save
```

### NPM install global Modules:
```js
npm install -g nodemon 
npm install -g live-server
```

### NPM uninstall global Modules:
```js
npm uninstall -g nodemon 
npm uninstall -g live-server
```
### Find Global Modules and their root folder:
```js
npm root -g
```

### NPM list Node Modules:
```js
npm list 
npm list --depth 0 
npm list --depth 1
```

### NPM run a script: 
```js
"scripts": { 
  "start": "node index.js" 
}
command to run: npm start
```

### NPM Run Live Server:
```js
"scripts": { 
  "server": "live-server" 
}
command to run: npm run server
```

### NPM Module Versions: 
```js
"gulp": "^4.0.2"   => This will update the minor versions
"gulp": "~4.0.2"   => This will update only bugs but no minor versions
"gulp": "*"        => This will update the latest major version.
```
### NPM install only Production dependencies (No 
```jsdevDependencies):
npm install --production
```

### NPM install all dependencies:
```js
npm install
```

### NPM help:
```js
npm help
npm
```