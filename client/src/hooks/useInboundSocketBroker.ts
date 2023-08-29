// Listens for an action from the socket and
// dispatches that action to the given basicReducer
import { SyncMsg } from "./useBasicReducer";
import { useSocket } from "./useSocket";

type InboundAction = "sheet" | "column" | "row" | "cell";

export const useInboundSocketBroker = <T>(
  on: InboundAction,
  target: React.Dispatch<SyncMsg<T>>
) => {
  const socket = useSocket();
  socket.on(on, (msg: SyncMsg<T>) => {
    target(msg);
  });
};
