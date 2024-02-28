const fs = require('fs');

function readDatabase(file) {
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

export default readDatabase;
module.exports = readDatabase;
