# node-fs-digger
Searches through the filesystem from a given file and returns information based on input query.

# Installation
In your command Line enter 
```
npm install --save fs-digger
```
# Usage
Require the package in your project
``` javascript
const digger = require('fs-digger');
```

To return an object listing the file system and its contents
```javascript
let startPath = './your_starting_folder';

let result = digger.dig(startPath);

console.log(result)
```
To return information about all files matching an extension:
```javascript
let startPath = './your_starting_folder';
let ext = 'mp4';

let result = digger.mineFileExt(startPath, ext);
```
To return all files matching a query by name (note, do not add extension)
```javascript
let startPath = './your_starting_folder';
let query = 'hello-world';

let result = digger.mineFileExt(startPath, query);
```

