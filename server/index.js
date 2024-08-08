const express = require("express");
const cors = require("cors");
const { User, Book } = require("./models");
const Sequelize = require("sequelize");
const app = express();
const port = 8080;

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.post("/users", async (req, res) => {
  try {
    const user = await User.create(req.body);
    res.json(user);
  } catch (err) {
    if (err instanceof Sequelize.ValidationError) {
      res.status(422).json({ error: err.errors[0].message });
    } else {
      res.status(500).json({ error: err.message });
    }
  }
});

// Get all users
app.get("/users", async (req, res) => {
  try {
    const users = await User.findAll();
    res.json(users);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Get users by ID
app.get("/users/:id", async (req, res) => {
  try {
    const user = await User.findOne({
      where: { id: req.params.id },
      include: {
        model: Book,
        as: "books",
      },
    });
    res.json(user);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Delete users by ID
app.delete("/users/:id", async (req, res) => {
  try {
    const user = await User.destroy({ where: { id: req.params.id } });
    res.json(user);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.post("/books", async (req, res) => {
  try {
    const user = await Book.create(req.body);
    res.json(user);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.get("/books", async (req, res) => {
  try {
    const book = await Book.findAll({
      include: {
        model: User,
        as: "user",
      },
    });
    res.json(book);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.delete("/books/:id", async (req, res) => {
  try {
    const book = await Book.destroy({ where: { id: req.params.id } });
    res.json(book);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.listen(port, () => console.log("Listening on port " + port));
