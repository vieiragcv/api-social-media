const { User } = require('../models');

const userController = {
  getAllUsers(req, res) {
    User.find({})
      .then(dbUserData => res.json(dbUserData))
      .catch(err => {
        console.log(err);
        res.sendStatus(400);
      });
  },
  createUser( {body}, res) {
    User.create(body)
    .then(dbUserData => res.json(dbUserData))
    .catch(err => res.json(err));
  },
  updateUser ( {params, body}, res) {
    User.findOneAndUpdate({ _id: params.id }, body, { new: true, runValudators: true })
      .then(dbUserData => {
        if (!dbUserData) {
          res.status(404).json({ message: 'No user found by this id' });
          return;
        }
        res.json(dbUserData);
      })
      .catch(err => res.json(err));
  }
};

module.exports = userController;


/* getUserById({ params }, res) {
  User.findOne({ _id: params.id })
    .then(dbUserData => res.json(dbUserData))
    .catch(err => {
      console.log(err);
      res.sendStatus(400);
    });
},

updateUser({ params, body}, res) {

},
deleteUser({ params }, res) {

} */