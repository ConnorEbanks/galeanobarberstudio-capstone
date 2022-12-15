require("dotenv").config();
const express = require("express");
const cors = require("cors");
const { Sequelize } = require("sequelize");

const app = express();

const { SERVER_PORT, CONNECTION_STRING } = process.env;

// MiddleWare
app.use(express.json());
app.use(cors());

const sequelize = new Sequelize(CONNECTION_STRING, {
  dialect: "postgres",
  dialectOptions: {
    ssl: {
      rejectUnauthorized: false,
    },
  },
});

sequelize.authenticate().then(() => {
  app.set("db", {
    sequelize,
  });
});

//CONTROLLERS

app.post("/register", async (req, res) => {
  const { username, password } = req.body;
  const [users] = await sequelize.query(`INSERT INTO users (
        username,
        password
    ) values (
        '${username}', 
        '${password}'
    )`);
  res.status(200).send(users);
});

//APP LISTEN
app.listen(SERVER_PORT, () => console.log(`up on ${SERVER_PORT}`));
