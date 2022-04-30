let User = require('../../db/models/User');

exports.usersCreate = async (req, res) => {
  try {
    if (req.file) {
      req.body.image = `http://${req.get('host')}/media/${req.file.filename}`;
    }
    const newUser = await User.create(req.body);
    res.status(201).json(newUser);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.usersDelete = async (req, res) => {
  const { UserId } = req.params;
  try {
    const foundUser = await User.findByPk(+UserId);
    if (foundUser) {
      await foundUser.destroy();
      res.status(204).end();
    } else {
      res.status(404).json({ message: 'User not found' });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.usersUpdate = async (req, res) => {
  const { UserId } = req.params;
  try {
    const foundUser = User.findByPk(+UserId);
    if (foundUser) {
      if (req.file) {
        req.body.image = `http://${req.get('host')}/media/${req.file.filename}`;
      }
      await foundUser.update(req.body);
      res.status(204).end();
    } else {
      res.status(404).json({ message: 'User not found' });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.usersGet = async (req, res) => {
  try {
    const Users = await User.findAll();
    res.json(Users);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
