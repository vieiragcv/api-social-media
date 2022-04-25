const { User } = require('../models');

const userController = {
  getAllUsers(req, res) {
    User.find({})
      .then(dbUserData => res.json(dbUserData))
      .catch(err => {
        console.log(err);
        res.sendStatus(400);
      });
  }
  /* getUserById({ params }, res) {
    User.findOne({ _id: params.id })
      .then(dbUserData => res.json(dbUserData))
      .catch(err => {
        console.log(err);
        res.sendStatus(400);
      });
  }, */
  /* createUser( {body}, res) {
    
  },
  updateUser({ params, body}, res) {

  },
  deleteUser({ params }, res) {

  } */
};

module.exports = userController;