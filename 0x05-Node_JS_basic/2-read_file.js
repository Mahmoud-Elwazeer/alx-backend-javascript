const fs = require('fs');

module.exports = function countStudents(file) {
  try {
    const data = fs.readFileSync(file, 'utf8');
    // STRING TO ARRAY
    const rows = data.split('\n'); // SPLIT ROWS
    let listCS = [];
    let listSWE = [];
    let count = 0;
    rows.forEach((row) => {
      const columns = row.split(',');
      if (columns[3] === 'CS') {
        listCS.push(columns[0]);
        count += 1;
      } else if (columns[3] === 'SWE') {
        listSWE.push(columns[0]);
        count += 1;
      }
    });
    const nCS = listCS.length;
    const nSWE = listSWE.length;
    listCS = listCS.join(', ');
    listSWE = listSWE.join(', ');

    console.log(`Number of students: ${count}`);
    console.log(`Number of students in CS: ${nCS}. List: ${listCS}`);
    console.log(`Number of students in CS: ${nSWE}. List: ${listSWE}`);
  } catch (error) {
    throw new Error('Cannot load the database');
  }
};
