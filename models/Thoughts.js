const { Schema, model, Types } = require('mongoose');
const dateFormat = require('../utils/dateFormat');

const ReactionsSchema = new Schema(
  {
    reactionId: {
      type: Schema.Types.ObjectId,
      default: () => new Types.ObjectId()
    },
    reactionBody: {
      type: String,
      required:true
    },
    writtenBy: {
      type: String,
      required: true,
      trim: true
    },
    createdAt: {
      type: Date,
      default: Date.now,
      get: createdAtVal => dateFormat(createdAtVal)
    }
  },
  {
    toJSON: {
      getters: true
    }
  }
);

const ThoughtsSchema = new Schema(
  {
    textArea: {
      type: String
      //required: true,
      //trim: true
      //validation -> 1 to 280 characters
    },
    createAt: {
      type: Date,
      default: Date.now,
      get: createdAtVal => dateFormat(createdAtVal)
    },
    userName: {
      type: String
      //required: true
    },
    reactions: [ReactionsSchema]
  }
);

ThoughtsSchema.virtual('thoughtsCount').get(function() {
  return this.reactions.reduce((total, friends) => total + friends.length + 1, 0);
});
  
const Thoughts = model('Thoughts', ThoughtsSchema);
module.exports = Thoughts;