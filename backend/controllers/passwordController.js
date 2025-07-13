const Password = require("../models/Password");

const getAllPasswords = async (req, res) => {
  const passwords = await Password.find({ user: req.user });
  res.json(passwords);
};

const addPassword = async (req, res) => {
  const { site, username, password } = req.body;
  const newPass = new Password({
    user: req.user,
    site,
    username,
    password,
  });
  await newPass.save();
  res.json(newPass);
};

const deletePassword = async (req, res) => {
  await Password.findByIdAndDelete(req.params.id);
  res.json({ message: "Deleted successfully" });
};

module.exports = { getAllPasswords, addPassword, deletePassword}