const express = require("express");
const cors = require("cors");

const app = express();

const database = require("./database");

var corsOptions = {
  origin: "http://localhost:3000",
  optionsSuccessStatus: 200,
  credentials: true,
};

app.use(cors(corsOptions));

const chefRouter = require("./routes/chefRouter");

database.on("error", console.error.bind(console, "MongoDB connection error:"));

app.get("/", (req, res) =>
  res.json({ message: "Welcome to AWB_Foods backend." })
);

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => console.log(`Server is running on port ${PORT}!`));

app.use("/api/", chefRouter);
