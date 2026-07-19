const express = require("express");
const cors = require("cors");
const morgan = require("morgan");

const authRoutes = require("./routes/authRouter");
const userRoutes = require("./routes/user.routes");

const app = express();

app.use(
  cors({
    origin: "http://localhost:3000",
    credentials: true,
  }),
);
app.use(express.json());

app.use(morgan("dev"));

app.get("/", (req, res) => {
  res.json({
    message: "Express Server Running",
  });
});

app.use((req, res, next) => {
  console.log(req.method, req.originalUrl);
  next();
});

app.post("/test", (req, res) => {
  res.json({ ok: true });
});

app.use("/api/auth", authRoutes);

app.use("/api/users", userRoutes);

module.exports = app;
