const http = require('http');
const url = require('url');
const server = http.createServer((req, res) => {
    let query = url.parse(req.url, true).query;
    console.log(query.name, query.id);

    res.end(`<h1>${JSON.stringify(query)}</h1>`);
}).listen(3000, () => {
    console.log('Server running at http://localhost:3000');
});
