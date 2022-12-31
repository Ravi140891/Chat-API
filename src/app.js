const dotenv = require("dotenv");
dotenv.config();

const express = require("express");
const cors = require("cors");
require("./db/conn");
const Message = require("./models/message");
const app = express();
const port = process.env.PORT || 8000;
app.use(express.json());
app.use(cors());

app.get("/", async (req, res) => {
  try {
    const userMsg = await Message.find();
    res.status(200).send(userMsg);
  } catch (e) {
    res.status(400).send(e);
  }
});

app.post("/", (req, res) => {
  const chat = new Message(req.body);
  chat
    .save()
    .then(() => {
      res.send(chat);
    })
    .catch((e) => {
      res.send(e);
    });
});

const server = app.listen(port, () => {
  console.log(`Connection started on ${port}`);
});

let io = require("socket.io")(server);

io.on("connection", (socket) => {
  console.log(`New Connection: ${socket.id}`);
});
