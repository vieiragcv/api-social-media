const { Schema, model, Types } = require('mongoose');
const dateFormat = require('../utils/dateFormat');

/* const FriendsSchema = new Schema(
  {
    friendId: {
      type: Schema.Types.ObjectId,
    }
  }
); */

const UserSchema = new Schema(
  {
    userId: {
      type: Schema.Types.ObjectId,
      default: () => Types.ObjectId()
    },
    userName: {
      type: String
      //required: true,
      //trim: true
      // validation
      // unique
    },
    email: {
      type: String
      //required: true
      // validation
      // unique
    },
    thoughts: {   //Array of _id values referencing the User model (self-reference)
      type: Array,
      //required: true,
      default: []
    },
    fiends: {
      type: Array,
      default: []
    },
    createdAt: {
      type: Date,
      default: Date.now,
      get: createdAtVal => dateFormat(createdAtVal)
    },
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
  return this.friends.reduce((total, friends) => total + friends.length + 1, 0);
});

const User = model('User', UserSchema);
module.exports = User;