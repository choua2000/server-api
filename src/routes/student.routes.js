const controller = require('../controllers/student.controller')

module.exports = (app) =>{
    app.post('/create_Student', controller.create),
    app.get('/get_student', controller.getstudent),
    app.get('/get_one/:id', controller.getstudent_id),
    app.delete('/delete_student/:id', controller.deletestudent),
    app.put('/update_student/:id', controller.updatestudent)
}