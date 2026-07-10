const jwt = require("jsonwebtoken");

const authMiddleware = (req, res, next) => {
  const authHeader = req.headers.authorization;

  // Kiểm tra có Authorization Header không
  if (!authHeader) {
    return res.status(401).json({
      message: "Unauthorized",
    });
  }

  // Kiểm tra đúng định dạng Bearer Token
  const [type, token] = authHeader.split(" ");

  if (type !== "Bearer" || !token) {
    return res.status(401).json({
      message: "Invalid token",
    });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    // Lưu thông tin user vào request
    req.user = decoded;

    next();
  } catch (error) {
    return res.status(401).json({
      message: "Token expired or invalid",
    });
  }
};

module.exports = authMiddleware;
