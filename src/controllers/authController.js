const authService = require("../services/authService");
const { Request, Response, NextFunction } = require("express");

exports.login = async (req, res, next) => {
  try {
    const result = await authService.login(req.body);

    res.status(200).json({
      success: true,
      message: "Đăng nhập thành công",
      data: result,
    });
  } catch (err) {
    next(err);
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

exports.refreshToken = async (req, res, next) => {
  try {
    const accessToken = await authService.refreshToken(req);

    return res.status(200).json({
      success: true,
      data: {
        accessToken,
      },
    });
  } catch (error) {
    next(error);
  }
};
