const fs = require('fs');
const path = require('path');

function dig(dir, result = []) {

    fs.readdirSync(dir).forEach((file) => {

        const filePath = path.resolve(dir, file);

        const fileInfo = { file, path: filePath };

        if (fs.statSync(filePath).isDirectory()) {
            fileInfo.type = 'dir';
            fileInfo.files = [];
            result.push(fileStats);
            return dig(filePath, fileInfo.files)
        }

        fileInfo.type = 'file';
        result.push(fileInfo);
    });
    return result;
}

function checkExt(file, type){
    let ext = path.extname(file).slice(1);

    let fileName = file.slice(0, -4)

    if(ext == type){
      return file;
    }
}

function search(file, query){
  let fileName = file.split('.').slice(0, -1).join('.')
  if(fileName == query){
    return file;
  }
}

function mineFileExt(dir, type, result = [], allFiles = []){

  fs.readdirSync(dir).forEach((file) => {

      const filePath = path.resolve(dir, file);

      const fileInfo = { file, path: filePath };

      if (fs.statSync(filePath).isDirectory()) {
          fileInfo.type = 'dir';
          fileInfo.files = [];
          result.push(fileInfo);
          return mineFileExt(filePath, type, fileInfo.files, allFiles)
      }

      let foundType = checkExt(filePath, type);
      if(foundType){
        result.push(fileInfo);
        allFiles.push(fileInfo);
      }


  });

  return allFiles;
}

function mineFileName(dir, type, result = [], allFiles = []){

  fs.readdirSync(dir).forEach((file) => {

      const filePath = path.resolve(dir, file);

      const fileInfo = { file, path: filePath };

      if (fs.statSync(filePath).isDirectory()) {
          fileInfo.type = 'dir';
          fileInfo.files = [];
          result.push(fileInfo);
          return mineFileName(filePath, type, fileInfo.files, allFiles)
      }

      let foundType = search(file, type);
      if(foundType){
        result.push(fileInfo);
        allFiles.push(fileInfo);
      }


  });

  return allFiles;
}


module.exports = {
  dig,
  mineFileExt,
  mineFileName
}
