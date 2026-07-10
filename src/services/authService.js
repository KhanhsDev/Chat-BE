const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const authRepository = require("../repositories/authRepository");

exports.register = async (data) => {
  const { username, email, password } = data;

  // Kiểm tra email đã tồn tại chưa
  const existed = await authRepository.findByEmail(email);

  if (existed) {
    throw new Error("Email đã tồn tại");
  }

  // Hash mật khẩu
  const hashedPassword = await bcrypt.hash(password, 10);

  // Lưu user
  const user = await authRepository.create({
    username,
    email,
    password: hashedPassword,
  });

  // Không trả password về client
  delete user.password;

  return user;
};

exports.login = async ({ email, password }) => {
  const user = await authRepository.findByEmail(email);
  if (!user) {
    throw new Error("Email không tồn tại");
  }
  // kiểm tra password
  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) {
    throw new Error("Mật khẩu không đúng");
  }
  // tạo token
  const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRES_IN,
  });
  // return
  return {
    token,
    user: {
      id: user.id,

      username: user.username,

      email: user.email,

      avatar: user.avatar,
    },
  };
};
