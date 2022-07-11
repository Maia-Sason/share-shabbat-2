import { Server } from "socket.io";

export default function SocketHandler(req, res) {
  if (res.socket.server.io) {
    console.log("Socket Already Connected");
  } else {
    console.log("Socket init");

    const io = new Server(res.socket.server);
    res.socket.server.io = io;

    io.on("connection", (socket) => {
      socket.emit("data-change", "world");
    });
  }
  res.end();
}
