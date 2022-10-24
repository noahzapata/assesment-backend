const { Schema, model } = require('mongoose');

const favSchema = new Schema(
  {
    title: {
      type: String,
      required: [true, 'This field is required'],
    },
    description: {
      type: String,
      required: false,
    },
    link: {
      type: String,
      required: false,
    },
    list: {
      type: Schema.Types.ObjectId,
      ref: 'List',
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const Fav = model('Fav', favSchema);

module.exports = Fav;
