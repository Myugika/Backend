const fs = require('fs');

fs.readFile('07.File/tmp/from.txt', 'utf8', (err, data) => {
    const dataArray = data.split('\n').map(s => s.trim());
    let output = '';
    dataArray.forEach((item, index) => {
        line = '';
        for (let i=0; i<index+1; i++) {
            line += item;
        }
        output += line + '\n';
    })
    fs.writeFile('07.File/tmp/to.txt', output, err => {
        if (err)
            console.log(err);
    });
});