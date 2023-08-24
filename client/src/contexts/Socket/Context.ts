import { Socket } from "socket.io-client";

export interface ISocketContextState {
  socket: Socket | undefined;
  uid: string;
  users: [];
}
