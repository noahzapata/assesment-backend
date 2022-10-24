const { Schema, model } = require('mongoose');

const listSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    favs: {
      type: [{ type: Schema.Types.ObjectId, ref: 'Fav' }],
      required: false,
    },
    user: {
      type: Schema.Types.ObjectId,
      ref: 'User',
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const List = model('List', listSchema);

module.exports = List;
