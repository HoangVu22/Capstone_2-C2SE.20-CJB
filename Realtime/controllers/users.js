const { friends, users } = require("../models");

const findById = async (req, res) => {
  const { id } = req.params;
  const user = await users.findByPk(id);
  return res.status(200).json(user);
};

const friendService = {
  findById,
};

module.exports = friendService;
