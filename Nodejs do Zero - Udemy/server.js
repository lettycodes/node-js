const http = require("http")
const host = "127.0.0.1"
const port = 3000

const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Ei, mundo!\n Meu primeiro script!');
})

server.listen(port, host, () => {
    console.log(`Server running at http://${host}:${port}`)
})