import { io } from "socket.io-client";

const PORT: string = process.env.PORT || "8080";
const URL = `http://localhost:${PORT}`;

const socket = io(URL);

export const useSocket = () => {
  return socket;
};
