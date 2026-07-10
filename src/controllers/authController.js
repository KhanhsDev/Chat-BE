const authService = require("../services/authService");

exports.login = async (req, res) => {
  try {
    const result = await authService.login(req.body);

    return res.json(result);
  } catch (err) {
    return res.status(400).json({
      message: err.message,
    });
  }
};

exports.register = async (req, res) => {
  console.log("req.body =", req.body);

  try {
    const user = await authService.register(req.body);

    return res.status(201).json({
      message: "Đăng ký thành công",
      data: user,
    });
  } catch (error) {
    return res.status(400).json({
      message: error.message,
    });
  }
};

exports.getCurrentUser = async (req, res) => {
  console.log(req.user);
  res.json(req.user);
};
