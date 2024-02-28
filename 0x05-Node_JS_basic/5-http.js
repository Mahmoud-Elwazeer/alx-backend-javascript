const http = require('http');
const fs = require('fs');

const hostname = 'localhost';
const port = 1245;

const app = http.createServer();
const DB_FILE = process.argv.length > 2 ? process.argv[2] : '';

function countStudents(file) {
  return new Promise((res, rej) => {
    fs.readFile(file, 'utf-8', (err, data) => {
      if (err) {
        rej(new Error('Cannot load the database'));
      }
      if (data) {
        const result = [];
        let listCS = [];
        let listSWE = [];
        let count = 0;
        const fileLines = data
          .toString('utf-8')
          .trim()
          .split('\n');
        const rows = fileLines.map((line) => line.split(','));
        rows.forEach((row) => {
          if (row[3] === 'CS') {
            listCS.push(row[0]);
            count += 1;
          } else if (row[3] === 'SWE') {
            listSWE.push(row[0]);
            count += 1;
          }
        });
        const nCS = listCS.length;
        const nSWE = listSWE.length;
        listCS = listCS.join(', ');
        listSWE = listSWE.join(', ');

        result.push(`Number of students: ${count}`);
        result.push(`Number of students in CS: ${nCS}. List: ${listCS}`);
        result.push(`Number of students in SWE: ${nSWE}. List: ${listSWE}`);
        res(result.join('\n'));
      }
    });
  });
}

const serverRouteHandler = [
  {
    route: '/',
    handler(_, res) {
      const responseText = 'Hello Holberton School!';
      res.setHeader('Content-Type', 'text/plain');
      res.setHeader('Content-Length', responseText.length);
      res.statusCode = 200;

      res.write(responseText);
    },
  },
  {
    route: '/students',
    handler(_, res) {
      const responseparts = ['This is the list of our students'];
      countStudents(DB_FILE)
        .then((report) => {
          responseparts.push(report);
          const responseText = responseparts.join('\n');
          res.setHeader('Content-Type', 'text/plain');
          res.setHeader('Content-Length', responseText.length);
          res.statusCode = 200;

          res.write(responseText);
        })
        .catch((err) => {
          responseparts.push(err.toString());
          const responseText = responseparts.join('\n');
          res.setHeader('Content-Type', 'text/plain');
          res.setHeader('Content-Length', responseText.length);
          res.statusCode = 200;

          res.write(responseText);
        });
    },
  },
];

app.on('request', (req, res) => {
  for (const route of serverRouteHandler) {
    if (route.route === req.url) {
      route.handler(req, res);
      break;
    }
  }
});

app.listen(port, hostname);

module.exports = app;
