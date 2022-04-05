const fs = require('fs');

const pathToRemove = './docs';
fs.rmSync(pathToRemove, { recursive: true, force: true });
