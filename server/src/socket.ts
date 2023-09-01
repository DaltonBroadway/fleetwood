import { Server as HTTPServer } from "http";
import { Socket, Server } from "socket.io";

// Takes an HTTP server and a handler register.
// register fn runs on socket connection and takes only the socket as an arg.
// All logic should be handled in a handler fns and registered with a register fn
// Returns the server
export const startSocket = (
  server: HTTPServer,
  registers: ((io: Server, socket: Socket) => void)[]
) => {
  const io = new Server(server, {
    serveClient: false,
    pingInterval: 10000,
    pingTimeout: 5000,
    cookie: false,
    cors: {
      origin: "*",
    },
  });
  io.on("connect", (socket) => {
    console.info("User " + socket.id + " Connected");
    registers.forEach((register) => register(io, socket));
    socket.on("disconnect", () => {
      console.info("User " + socket.id + " Disconnected");
    });
  });
  console.info("Socket Started");
  return io;
};
