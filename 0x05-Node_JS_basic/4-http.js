const http = require('http');

const hostname = 'localhost';
const port = 1245;

const app = http.createServer();

app.on('request', (_, res) => {
  const responseText = 'Hello Holberton School!';
  res.setHeader('Content-Type', 'text/plain');
  res.setHeader('Content-Length', responseText.length);
  res.statusCode = 200;

  res.write(responseText);
});

app.listen(port, hostname, () => {
  process.stdout.write(`Server running at http://${hostname}:${port}/\n`);
});
