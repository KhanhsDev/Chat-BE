const userService = require("../services/user.service");

const getUsers = async (req, res) => {
  try {
    const users = await userService.getAll();
    return res.status(200).json({
      message: "Lấy danh sách người dùng thành công",
      data: users,
    });
  } catch (error) {
    return res.status(500).json({
      message: error.message,
    });
  }
};

const getUser = async (req, res) => {
  const id = Number(req.params.id);

  const user = await userService.getById(id);

  if (!user) {
    return res.status(404).json({
      message: "User not found",
    });
  }

  res.json(user);
};

const createUser = async (req, res) => {
  const user = await userService.create(req.body);

  res.status(201).json(user);
};

const updateUser = async (req, res) => {
  const id = Number(req.params.id);

  const user = await userService.update(id, req.body);

  res.json(user);
};

const deleteUser = async (req, res) => {
  const id = Number(req.params.id);

  await userService.remove(id);

  res.status(204).send();
};

module.exports = {
  getUsers,
  getUser,
  createUser,
  updateUser,
  deleteUser,
};
