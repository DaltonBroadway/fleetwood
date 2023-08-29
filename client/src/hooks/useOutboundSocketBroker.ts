// Provides a callback to an individual component so that the component
// can dispatch to local state and server state in one action
import { useSocket } from "./useSocket";
import { ActionType, TargetId, SyncMsg } from "./useBasicReducer";

export const useOutboundSocketBroker = <T>(
  target: string,
  dispatch: React.Dispatch<SyncMsg<T>>
) => {
  const socket = useSocket();
  return (action: ActionType, id: TargetId, delta: T) => {
    const syncMsg: SyncMsg<T> = {
      action: action,
      target: id,
      payload: delta,
    };
    dispatch(syncMsg);
    socket.emit(target, syncMsg);
  };
};
