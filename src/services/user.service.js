const userRepository = require("../repositories/userRepository");

const getAll = async () => {
  return await userRepository.getAll();
};
const getById = async (id) => {
  return await userRepository.getById(id);
};

const create = async (data) => {
  return await userRepository.create(data);
};

const update = async (id, data) => {
  return await userRepository.update(id, data);
};

const remove = async (id) => {
  return await userRepository.remove(id);
};

module.exports = {
  getAll,
  getById,
  create,
  update,
  remove,
};
