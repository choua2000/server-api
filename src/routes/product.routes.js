const controller = require('../controllers/product.controller');

module.exports = (app) => {
    app.post('/createProduct', controller.create);
    app.get('/getAll', controller.selectAll);
    app.get('/getbyid/:id', controller.get_id);
    app.delete('/deleteProduct/:id', controller.delete_data);
    app.put('/updateProduct/:id', controller.update_id);
}