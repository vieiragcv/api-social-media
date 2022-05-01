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
      .then()
      .catch(err => res.json(err));
  },

  updateThought({ params, body}, res) {
    Thoughts.findOneAndUpdate(
      { _id: params.id },
      body,
      {new: true, runValidators: true }
    )
      .then(dbThoughtsData => {
        if (!dbThoughtsData) {
          res.status(400).json( { message: 'No thought found by this id' } );
          return;
        }
        res.json(dbThoughtsData);
      })
      .catch(err => res.json(err));
  },

  deleteThought({ params }, res) {
    Thoughts.findOneAndDelete({ _id: params.id})
      .then(dbThoughtsData => res.json(dbThoughtsData))
      .catch(err => res.json(err));
  },

  addReaction({ params, body}, res) {
    Thoughts.findOneAndUpdate(
      { _id: params.thoughtId },
      { $push: { reactions: body} },
      { new: true/* , runValidators: true */ }
    )
      .then(dbThoughtsData => {
        if (!dbThoughtsData) {
          res.status(300).json({ message: 'No Thoughts found with this id'});
          return;
        }
        res.json(dbThoughtsData);
      })
      .catch(err => res.json(err));
  },

  deleteReaction({ params }, res) {
    Thoughts.findOneAndUpdate(
      { _id: params.thoughtId },
      { $pull: { reactions: { _id: params.reactionId } } },
      { new: true }
    )
    .then(dbThoughtsData => res.json(dbThoughtsData))
    .catch(err => res.json(err));
  }
  
};

module.exports = thoughtsController;