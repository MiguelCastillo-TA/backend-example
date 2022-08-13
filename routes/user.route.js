const UserController = require('../controllers/user.controller');

module.exports = app => {
    app.post('/api/user/create', UserController.createNewUser)
    app.get('/api/user/all', UserController.findAllUsers)
}