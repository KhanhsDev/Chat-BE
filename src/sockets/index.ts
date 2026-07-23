import { Server } from "socket.io";
import { Server as HttpServer } from "http";

import { socketAuth } from "./socketAuth";
import { socketHandler } from "./socketHandler";

let io: Server;

export function initSocket(server: HttpServer) {
  io = new Server(server, {
    cors: {
      origin: "http://localhost:3000",

      credentials: true,
    },
  });

  io.use(socketAuth);

  io.on("connection", socketHandler);
}

export function getIO() {
  return io;
}
