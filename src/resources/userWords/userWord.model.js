const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const { addMethods } = require('../../utils/toResponse');

const UserWordsSchema = new Schema(
  {
    wordId: { type: mongoose.Schema.Types.ObjectID, required: true },
    userId: { type: mongoose.Schema.Types.ObjectID, required: true },
    difficulty: { type: String, required: false },
    optional: {
      type: Object,
      required: false,
    },
  },
  { collection: 'userWords' }
);

UserWordsSchema.index({ wordId: 1, userId: 1 }, { unique: true });

addMethods(UserWordsSchema);

module.exports = mongoose.model('UserWords', UserWordsSchema);
