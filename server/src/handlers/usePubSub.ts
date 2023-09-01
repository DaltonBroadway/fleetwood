import { Socket } from "socket.io";
import {
  Id,
  Sheet,
  StateAction,
  SyncedStateAction,
  Target,
} from "../shared/types";

//  Send new state to clients who are subscribed to the parent.
//  Returns publish() which emits to the parent room.
export const usePubSub = (socket: Socket) => {
  return (target: Target, parent_id: Id, state: StateAction<Sheet>) => {
    const data: SyncedStateAction<Sheet> = {
      parent_id: parent_id, // used as the room id
      state: state.constructor == Array ? state : [state],
    };
    if (!socket.rooms.has(parent_id)) {
      socket.join(parent_id);
    }
    socket.to(parent_id).emit(target, data);
  };
};
