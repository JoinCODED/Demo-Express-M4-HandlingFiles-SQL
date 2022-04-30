const express = require('express');
const router = express.Router();
const upload = require('../../middleware/multer');

const {
  usersGet,
  usersUpdate,
  usersDelete,
  usersCreate,
} = require('./users.controllers');

router.get('/', usersGet);
router.post('/', upload.single('image'), usersCreate);

router.delete('/:userId', usersDelete);

router.put('/:userId', upload.single('image'), usersUpdate);

module.exports = router;
