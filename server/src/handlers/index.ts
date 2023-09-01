import { Socket } from "socket.io";
import { Sheet, SyncedStateAction } from "../shared/types";
import { usePublish } from "./usePublish";
import { columnHandler } from "./column";
import { sheetHandler } from "./sheet";
import { rowHandler } from "./row";
import { cellHandler } from "./cell";

const handlers = [sheetHandler, columnHandler, rowHandler, cellHandler];

//  Registers the handlers to a listener on the server.
//  Takes 1 server and registers all listeners to it.
//  LISTENER expects an array of state, loops through array and passes each individual state to the handler.
//  This could be optimized
export const registerHandlers = (socket: Socket) => {
  const publish = usePublish(socket);
  handlers.forEach(([target, handler]) => {
    socket.on(target, ({ parent_id, state }: SyncedStateAction<Sheet>) =>
      state.forEach((st) => {
        handler(parent_id, st);
        publish(target, parent_id, st);
      })
    );
  });
};
