// const express = require("express");
// const { createServer } = require("node:http");
// const { join } = require("node:path");
// const { Server } = require("socket.io");

// const app = express();
// const server = createServer(app);
// const io = new Server(server);

// app.get("/", (req, res) => {
//   res.sendFile(join(__dirname, "index.html"));
// });

// io.on("connection", (socket) => {
//   //   socket.broadcast.emit("hi");
//   socket.on("chat message", (msg) => {
//     console.log("msg", msg);
//     io.emit("message : " + msg);
//   });
// });

// server.listen(3000, () => {
//   console.log("server running at http://localhost:3000");
// });

const express = require("express");
const { createServer } = require("node:http");
const { join } = require("node:path");
const { Server } = require("socket.io");

const app = express();
const server = createServer(app);
const io = new Server(server);

app.get("/", (req, res) => {
  res.sendFile(join(__dirname, "index.html"));
});

io.on("connection", (socket) => {
  io.emit("in out", "user connected");

  socket.on("disconnect", () => {
    io.emit("in out", "user disconnected");
  });

  socket.on("chat message", (msg) => {
    io.emit("chat message", msg);
  });
});

server.listen(3000, () => {
  console.log("server running at http://localhost:3000");
});
