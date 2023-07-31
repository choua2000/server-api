const controller = require('../controllers/employee.controlle');
module.exports = (app) => {
    app.post('/createEmployee', controller.create);
    app.get('/select', controller.select_all);
    app.get('/getOne/:id', controller.getOne);
    app.put('/updatedata/:id', controller.update);
    app.delete('/deletedata/:id', controller.delete)
}