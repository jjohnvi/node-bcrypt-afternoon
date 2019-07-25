const bcrypt = require("bcryptjs");

const dragonTreasure = async (req, res) => {
  const db = req.app.get("db");

  const results = await db.get_dragon_treasure(1);
  res.status(200).json(results);
};

const getUserTreasure = async (req, res) => {
  const db = req.app.get("db");
  const { id } = req.session.user;

  const results = await db.get_user_treasure(id);
  res.status(200).json(results);
};

const addUserTreasure = async (req, res) => {
  const db = req.app.get("db");
  const { treasureUrl } = req.body;
  const { id } = req.session.user;
  const userTreasure = await db.add_user_treasure(treasureUrl, id);
  res.status(200).json(userTreasure);
};

const getAllTreasure = async (req, res) => {
  const db = req.app.get("db");

  const results = await db.get_all_treasure();
  res.status(200).json(results);
};

module.exports = {
  dragonTreasure,
  getUserTreasure,
  addUserTreasure,
  getAllTreasure
};
