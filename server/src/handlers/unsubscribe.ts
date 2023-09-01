import { Server, Socket } from "socket.io";
import { Id } from "../shared/types";

export const registerUnsubscribeHandler = (io: Server, socket: Socket) => {
  socket.on("unsubscribe", (parent_id: Id) => {
    if (socket.rooms.has(parent_id)) {
      socket.leave(parent_id);
    }
  });
};
