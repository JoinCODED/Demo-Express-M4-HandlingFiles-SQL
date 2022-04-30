const express = require('express');
const router = express.Router();
const {
  usersGet,
  usersUpdate,
  usersDelete,
  usersCreate,
} = require('./users.controllers');

router.get('/', usersGet);
router.post('/', usersCreate);

router.delete('/:userId', usersDelete);

router.put('/:userId', usersUpdate);

module.exports = router;
