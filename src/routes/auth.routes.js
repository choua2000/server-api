const controller = require('../controllers/auth.controller');

module.exports = (app) =>{
   app.post('/SignupAuth', controller.signup),
   app.post('/SigninAuth', controller.signin),
   app.delete('/deleted/:id', controller.delete),
   app.get('/selectAuth', controller.selectAuth),
   app.get('/getAuth/:id', controller.getAuth),
   app.put('/updateAuth/:id', controller.updateAuth)
}