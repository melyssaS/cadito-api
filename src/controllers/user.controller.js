const User = require("../models/User");

const register = async (req, res) => {
  const isNew = await User.findOne({ username: req.body.username });
  try {
    if (!isNew) {
      const user = await User.create(req.body);
      res.status(200).json(user);
    } else {
      res.status(208).json({ msg: "User already exists" });
    }
  } catch (error) {
    res.status(500).json({ error });
  }
};

const getUser = async (req, res) => {
  const user = await User.findOne({user_id: req.query.user_id});
  try {
    if (!user) {
      res.status(404).json({ msg: "Not exist!!" });
    } else {
      res.status(200).json(user);
    }
  } catch (error) {
    res.status(500).json({ error });
  }
};

const login = async (req, res) => {
  try {
    const user = await User.findOne({
      username: req.body.username,
      password: req.body.password,
    });

    if (!user) {
      res.status(404).json({ msg: "Not exist!!" });
    } else {
      res.status(200).json(user);
    }
  } catch (error) {
    res.status(500).json({ error });
  }
};

const prevLogin = async (req, res) => {
  const user = await User.find({_id: req.body.user_id});
  try {
    if (!user) {
      res.status(200).json(user);
    } else {
      res.status(208).json({ msg: "User already exists" });
    }
  } catch (error) {
    res.status(500).json({ error });
  }
};

module.exports = { register, getUser, login, prevLogin };
