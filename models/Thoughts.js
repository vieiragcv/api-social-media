const { Schema, model, Types } = require('mongoose');
const dateFormat = require('../utils/dateFormat');

const ReactionsSchema = new Schema(
  {
    reactionBody: {
      type: String,
      required:true,
      maxlength: 280,
      trim: true
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
    },
    id: false
  },
);

const ThoughtsSchema = new Schema(
  {
    textArea: {
      type: String,
      required: true,
      maxlength: 280,
      trim: true
    },
    createAt: {
      type: Date,
      default: Date.now,
      get: createdAtVal => dateFormat(createdAtVal)
    },
    userName: {
      type: String,
      required: true,
      trim: true
      // need to validate a matching userName exists in the DB !
    },
    reactions: [ReactionsSchema]
  },
  {
    toJSON: {
      virtuals: true,
      getters: true
    },
    id: false
  }
);
ThoughtsSchema.virtual('reactionsCount').get(function() {
  return this.reactions.length;
});
  
const Thoughts = model('Thoughts', ThoughtsSchema);
module.exports = Thoughts;