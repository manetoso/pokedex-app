const fs = require('fs');

const currPath = './dist';
const newPath = './docs';

fs.rename(currPath, newPath, function (err) {
  if (err) {
    console.log(err);
  } else {
    console.log('Successfully renamed the directory.');
  }
});
