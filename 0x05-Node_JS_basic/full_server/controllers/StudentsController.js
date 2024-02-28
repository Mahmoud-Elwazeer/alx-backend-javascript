const readDatabase = require('../utils')

const VALID_MAJORS = ['CS', 'SWE'];

class StudentsController {
  static getAllStudents(request, response) {
    // const dataPath = process.argv.length > 2 ? process.argv[2] : '';
    const responseparts = ['This is the list of our students'];
    readDatabase('../../database.csv')
      .then((report) => {
        responseparts.push(report);
        const responseText = responseparts.join('\n');
        response.status(200).send(responseText);
      })
      .catch((err) => {
        responseparts.push(err.toString());
        const responseText = responseparts.join('\n');
        response.status(500).send(responseText);
      });
  }

  static getAllStudentsByMajor(request, response) {
    // const dataPath = process.argv.length > 2 ? process.argv[2] : '';
    const { major } = request.params;

    if (!VALID_MAJORS.includes(major)) {
      response.status(500).send('Major parameter must be CS or SWE');
      return;
    }
    const responseparts = ['This is the list of our students'];
    readDatabase('../../database.csv')
      .then((report) => {
        responseparts.push(report);
        const responseText = responseparts.join('\n');
        response.status(200).send(responseText);
      })
      .catch((err) => {
        responseparts.push(err.toString());
        const responseText = responseparts.join('\n');
        response.status(500).send(responseText);
      });
  }
}

export default StudentsController;
module.exports = StudentsController;
