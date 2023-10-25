import express from "express";
import { createServer } from "node:http";
import { Server } from "socket.io";

const app = express();
const server = createServer(app);
const io = new Server(server, {
  cors: {
    origin: "http://localhost:3000",
  },
});
let connects = [];

io.listen(3001);
io.on("connection", (socket) => {
  socket.on("startApp", (data) => {
    connects.push(data);
    io.emit("countConactions", { count: connects.length, id: data });
  });
});

server.listen(3002, () => {
  console.log("server running at http://localhost:3002");
});
