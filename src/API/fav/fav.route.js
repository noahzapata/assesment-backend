const express = require('express');
const router = require('express').Router();
const { list, update, create, destroy, show } = require('./fav.controller');
const { auth } = require('../../utils/auth');

router.post('/:listId', auth, create);
router.get('/:listId', auth, list);
router.get('/only/:favId', auth, show);
router.put('/:favId', auth, update);
router.delete('/:favId', auth, destroy);

module.exports = router;
