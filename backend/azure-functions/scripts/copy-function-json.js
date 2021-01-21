const fs = require('fs');
const glob = require('glob');
const path = require('path');

glob('src/*/function.json', (err, result) => {
    if (err) throw err;
    result.forEach(functionJsonFile => {
        const destinationFile = functionJsonFile.replace('src', 'dist');
        fs.mkdirSync(path.dirname(destinationFile));
        fs.copyFileSync(functionJsonFile, destinationFile);
    })
});

