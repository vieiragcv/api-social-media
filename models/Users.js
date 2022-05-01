const { Schema, model, Types } = require('mongoose');
const dateFormat = require('../utils/dateFormat');

const UserSchema = new Schema(
  {
    userName: {
      type: String,
      required: true,
      trim: true
      //validation
      //unique
    },
    email: {
      type: String,
      required: true
      //validation
      //unique
    },
    thoughts: [
      {
        type: Schema.Types.ObjectId,
        ref: 'Thoughts'
      }
    ],
    createdAt: {
      type: Date,
      default: Date.now,
      get: createdAtVal => dateFormat(createdAtVal)
    },
    friends: [
      {
        type: Schema.Types.ObjectId,
        ref: 'Users'
      }
    ]
  },
  {
    toJSON: {
      virtuals: true,
      getters: true
    },
    id: false
  }
);

UserSchema.virtual('friendsCount').get(function() {
  return this.friends.length;
});

const User = model('User', UserSchema);
module.exports = User;