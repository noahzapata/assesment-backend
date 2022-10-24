const { Schema, model, models } = require('mongoose');
const userSchema = new Schema(
  {
    email: {
      type: String,
      required: [true, 'This field is required'],
      validate: [
        {
          async validator(value) {
            try {
              const user = await models.User.findOne({ email: value });
              return !user;
            } catch {
              return false;
            }
          },
          message: 'There is already a registered user with this email',
        },
      ],
    },
    password: {
      type: String,
      required: [true, 'This field is required'],
    },
    lists: {
      type: [{ type: Schema.Types.ObjectId, ref: 'list' }],
      required: false,
    },
  },
  {
    timestamps: true,
  }
);

const User = model('User', userSchema);

module.exports = User;
