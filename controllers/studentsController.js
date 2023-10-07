const Student = require('../model/student');
const dbManager = require('../Wenglarz_1215776016_M3L2-Module4-Part2/M2_PartB/database/db-manager');

exports.getAllStudents = function(req, res) {
    // Render the form and pass in the current student data
    res.render('index', { students: dbManager.getStudents() });
};

exports.addStudent = function(req, res) {
    // Create new student and save it to the database
    dbManager.addStudent(req.body)

    // Redirect back to the form
    res.redirect('/students');
}

// The GET a specific route for the form students data base
exports.getStudentByID = function(req, res) {
    // Render the form and pass in the current student data
    const id = Number(req.params.id);
    res.render('index', { students: dbManager.getSpecificStudent(id) });
};

exports.updateStudentByID = function(req, res) {
    // Parse ID
    const id = Number(req.params.id);
    
    // Add the submitted student data to our data store
    dbManager.upDateStudent(id, req.body);
  
    // Redirect back to the form
    res.redirect('/students');
};

exports.deleteStudentByID = function (req, res) {
    // Parse ID
  const id = Number(req.params.id);

  // Delete the student
  dbManager.deleteStudent(id);

  // Redirect back to the form
  res.redirect('/students');
}