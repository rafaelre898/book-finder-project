const fs = require('fs');
function writeFile(filePath, data) {
  return new Promise((resolve, reject) => {
    fs.writeFile(filePath, data, 'utf8', (err) => {
      if (err) {
        reject(err);
        return;
      }
      resolve();
    });
  });
}
module.exports = { writeFile };