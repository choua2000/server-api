const controller = require('../controllers/user.controller')
module.exports = (app) => {
    app.post('/createUser', controller.create);
    app.get('/get_all', controller.getAll);
    app.get('/get_id/:id', controller.get_id);
    app.put('/update_data/:id', controller.updatedata);
    app.delete('/delete_data/:id', controller.delete_id)
}