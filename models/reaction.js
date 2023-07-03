const { Schema } = require('mongoose');

const ReactionSchema = new Schema(
  {
    reactionId: {
      type: Schema.Types.ObjectId,
      default: () => new Types.ObjectId(),
    },
    reactionBody: {
      type: String,
      required: true,
      maxLength: 280
    },
    username: {
      type: String,
      required: true
    },
    createdAt: {
      type: Date,
      default: Date.now,
      get: dateCreated => dateFormat(dateCreated)
    },
  },
  {
    toJSON: {
      getters: true
    },
  }
);

module.exports = ReactionSchema;
