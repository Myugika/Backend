const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
    fs.readFile('media/samplemp4.mp4', (err, mp4) => {
        res.writeHead(200, {'Content-Type': 'video/mp4'});
        res.end(mp4);
    })
});

server.listen(3000);
