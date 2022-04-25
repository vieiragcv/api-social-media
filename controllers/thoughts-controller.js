const { Thoughts } = require('../models');

const thoughtsController = {
  getAllThoughts(req, res) {
    Thoughts.find({})
    .then(dbUserData => res.json(dbUserData))
    .catch(err => {
      console.log(err);
      res.sendStatus(400);
    });
  },
  getThoughtsbyId({ params }, res) {
    Thoughts.findOne({ _id: params.id })
      .then(dbThoughtsData => res.json(dbThoughtsData))
      .catch(err => {
        console.log(err);
        res.sendStatus(400);
      });
  },
   addThought( { body }, res) {
    Thoughts.create(body)
      .then(dbThoughtsData => res.json(dbThoughtsData))
      .catch(err => res.json(err));
  },
  
  deleteThought({ params }, res) {
    Thoughts.findOneAndDelete({ _id: params.id})
      .then(dbThoughtsData => res.json(dbThoughtsData))
      .catch(err => res.json(err));
  }
 /*  updateThought({ params, body}, res) {

  }  */
};

module.exports = thoughtsController;