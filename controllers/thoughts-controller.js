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

  addReaction({ params, body}, res) {
    Thoughts.findOneAndUpdate(
      { _id: params.thoughtsId },
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
      { _id: params.reactionId },
      { $pull: { reactions: { reactionId: params.reactionId } } },
      { new: true }
    )
    .then(dbThoughtsData => res.json(dbThoughtsData))
    .catch(err => res.json(err));
  },

  deleteThought({ params }, res) {
    Thoughts.findOneAndDelete({ _id: params.id})
      .then(dbThoughtsData => res.json(dbThoughtsData))
      .catch(err => res.json(err));
  }
};

module.exports = thoughtsController;