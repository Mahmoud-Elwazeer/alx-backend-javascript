const express = require('express');
const fs = require('fs');

const app = express();
const port = 1245;
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

app.get('/', (_, res) => {
  res.send('Hello Holberton School!');
});

app.get('/students', (_, res) => {
  const responseparts = ['This is the list of our students'];
  countStudents(DB_FILE)
    .then((report) => {
      responseparts.push(report);
      const responseText = responseparts.join('\n');
      res.send(responseText);
    })
    .catch((err) => {
      responseparts.push(err.toString());
      const responseText = responseparts.join('\n');

      res.send(responseText);
    });
});

app.listen(port);

module.exports = app;
