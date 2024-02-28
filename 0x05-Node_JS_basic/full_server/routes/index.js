const express = require('express')
const AppController = require('../controllers/AppController')
const StudentsController = require('../controllers/StudentsController')

const mapRoutes = (app) => {
    app.get('/', AppController.getHomepage);
    app.get('/students', StudentsController.getAllStudents);
    app.get('/students/:major', StudentsController.getAllStudentsByMajor);
  };
  
export default mapRoutes;
module.exports = mapRoutes;