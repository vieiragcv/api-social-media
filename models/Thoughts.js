const { Schema, model } = require('mongoose');
const dateFormat = require('../utils/dateFormat');

const ThoughtsSchema = new Schema(
  {
    thoughtId: {
      type: Schema.Types.ObjectId,
      default: () => Types.ObjectId()
    },
    textArea: {
      type: String,
      required: true,
      trim: true
    },
    createAt: {
      type: Date,
      default: Date.now,
      get: createdAtVal => dateFormat(createdAtVal)
    },
    userName: {
      type: String,
      required: true
    },
    reactions: {
      type: Array,
      required: true
    }
  });
