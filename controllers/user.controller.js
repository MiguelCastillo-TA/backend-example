const User = require('../models/user.model');

module.exports.findAllUsers = (req, res) => {
    User.find()
        .then(allUsers => res.json({users: allUsers}))
        .catch((err) => res.json({error: err}))
}

module.exports.createNewUser = (req, res) => {
    console.log(req.body)
    User.create(req.body)
    .then((newUser) => res.json({ user: newUser}))
    .catch((err) => res.json({error: err}))
}