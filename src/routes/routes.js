const express = require('express');
const router = express.Router();

const productRoute = require('./product.routes');
const userRoute = require('./user.routes');
const employeeRoute = require('./employee.routes');
const studentRoute = require('./student.routes');
const authRoute = require('./auth.routes')


productRoute(router);
userRoute(router);
employeeRoute(router);
studentRoute(router);
authRoute(router)

module.exports = router;