const fs = require('fs');
const { parse } = require('csv-parse');

module.exports = function countStudents(file) {
  return new Promise((res) => {
    let listCS = [];
    let listSWE = [];
    let count = 0;
    fs.createReadStream(file)
      .pipe(parse({ delimiter: ',', from_line: 2 }))
      .on('data', (row) => {
        if (row[3] === 'CS') {
          listCS.push(row[0]);
          count += 1;
        } else if (row[3] === 'SWE') {
          listSWE.push(row[0]);
          count += 1;
        }
      })
      .on('end', () => {
        const nCS = listCS.length;
        const nSWE = listSWE.length;
        listCS = listCS.join(', ');
        listSWE = listSWE.join(', ');

        console.log(`Number of students: ${count}`);
        console.log(`Number of students in CS: ${nCS}. List: ${listCS}`);
        console.log(`Number of students in SWE: ${nSWE}. List: ${listSWE}`);
        res();
      })
      .on('error', () => {
        throw new Error('Cannot load the database');
      });
  });
};
