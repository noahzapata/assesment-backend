const User = require('../user/user.model');
const List = require('./list.model');
const create = async (req, res) => {
  const data = req.body;
  const id = req.user;

  try {
    const user = await User.findById(id);
    const list = await List.create(data, id);
    user.lists.push(list);
    await user.save({ validateBeforeSave: false });
    return res.status(201).json({ message: 'List created', data: list });
  } catch (err) {
    return res
      .status(400)
      .json({ message: 'List could not be created', error: err });
  }
};

const list = async (req, res) => {
  const id = req.user;
  try {
    const lists = await List.find(id);
    return res.status(200).json({ message: 'Lists found', data: lists });
  } catch (err) {
    return res
      .status(400)
      .json({ message: 'Lists could not be found', error: err });
  }
};

const show = async (req, res) => {
  const { listId } = req.params;
  try {
    const list = await List.findById(listId);
    return res.status(200).json({ message: 'List found', data: list });
  } catch (err) {
    return res
      .status(400)
      .json({ message: 'List could not be found', error: err });
  }
};

const update = async (req, res) => {
  const { listId } = req.params;
  const listData = req.body;
  try {
    const list = await List.findByIdAndUpdate(listId, listData);
    return res.status(200).json({ message: 'List updated', data: list });
  } catch (err) {
    return res
      .status(400)
      .json({ message: 'List could not be updated', error: err });
  }
};

const destroy = async (req, res) => {
  const { listId } = req.params;
  try {
    const listDeleted = await List.findByIdAndRemove(listId);
    return res.status(200).json({ message: 'List deleted', data: listDeleted });
  } catch (err) {
    return res.status(400).json({ message: 'List not deleted', data: err });
  }
};

module.exports = { create, list, show, update, destroy };
