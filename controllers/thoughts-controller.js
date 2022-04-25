const { Thoughts } = require('../models');

const thoughtsController = {
  getAllThoughts(req, res) {
    Thoughts.find({})
    .then(dbUserData => res.json(dbUserData))
    .catch(err => {
      console.log(err);
      res.sendStatus(400);
    });
  }
  /* getThoughtsbyId({ params }, res) {

  },
  createThought( {body}, res) {

  },
  updateThought({ params, body}, res) {

  },
  deleteThought({ params }, res) {

  } */
};

module.exports = thoughtsController;