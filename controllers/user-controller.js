const { User } = require('../models');

const userController = {

/*------------------------- 
 -     USERS
-------------------------*/

  getAllUsers(req, res) {
    User.find({})
      .then(dbUserData => res.json(dbUserData))
      .catch(err => {
        console.log(err);
        res.sendStatus(400);
      });
  },

  getUserById({ params }, res) {
    User.findOne({ _id: params.id })
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
    User.findOneAndUpdate(
      { _id: params.id }, 
      body, 
      { new: true, runValudators: true }
    )
    .then(dbUserData => {
      if (!dbUserData) {
        res.status(404).json({ message: 'No user found by this id' });
        return;
      }
      res.json(dbUserData);
    })
    .catch(err => res.json(err));
  },

  deleteUser ( {params}, res) {
    User.findOneAndDelete({ _id: params.id })
      .then(dbUserData => res.json(dbUserData))
      .catch(err => res.json(err));
  },

/*------------------------- 
 -    FRIENDS
-------------------------*/

  addFriend ( {params, body}, res) {
    User.findOneAndUpdate(
      { _id: params.userId },
      { $push: { friends: body } },
      { new: true, runValidators: true }
    )
    .then(dbUserData => {
      if(!dbUserData) {
        res.status(300).json({ message: 'No User found'});
        return;
      }
      res.json(dbUserData);
    })
    .catch(err => res.json(err));
  },

  deleteFriend( {params}, res) {
    User.findOneAndUpdate(
      { _id: params.userId },
      { $pull: { friends: params.friendId } },
      { new: true }
    )
    .then(dbUserData => {
      if(!dbUserData) {
        res.status(300).json({ message: 'No Friend found by that ID'});
        return;
      }
      res.json(dbUserData);
    })
    .catch(err => res.json(err));
  }

};

module.exports = userController;

