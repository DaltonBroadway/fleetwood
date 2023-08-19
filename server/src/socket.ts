import { MsgHandlerTuple } from "./handlers";

import { Server as HTTPServer } from "http";
import { Socket, Server } from "socket.io";

export class ServerSocket {
  public static instance: ServerSocket;
  public io: Server;
  public users: { [uid: string]: string };
  constructor(server: HTTPServer, handlers: MsgHandlerTuple[]) {
    ServerSocket.instance = this;
    this.users = {};
    this.io = new Server(server, {
      serveClient: false,
      pingInterval: 10000,
      pingTimeout: 5000,
      cookie: false,
      cors: {
        origin: "*",
      },
    });
    this.io.on("connect", (socket) => {
      console.log("New Connection " + socket.id);
      socket.on("handshake", () => {
        console.info("Handshake recieved from " + socket.id);
      });
      socket.on("disconnect", () => {
        console.info("User " + socket.id + " Disconnected");
      });
      this.registerHandlers(socket, handlers);
    });
    console.info("Socket Started");
  }
  registerHandlers = (socket: Socket, handlers: MsgHandlerTuple[]) => {
    handlers.forEach((msgHandlerTuple) => {
      socket.on(msgHandlerTuple[0], (data) => msgHandlerTuple[1](data));
    });
  };
}
