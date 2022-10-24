const Router = require('express');
const { auth } = require('../../utils/auth');
const { create, list, show, update, destroy } = require('./list.controller');

const router = Router();

router.post('/', auth, create);
router.get('/', auth, list);
router.get('/:listId', auth, show);
router.put('/:listId', auth, update);
router.delete('/:listId', auth, destroy);

module.exports = router;
