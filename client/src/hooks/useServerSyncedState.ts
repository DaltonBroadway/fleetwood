import { Id, Action, StateAction, Target, State } from "./types";
import { useBasicReducer } from "./useBasicReducer";
import { useSocket } from "./useSocket";

export const useServerSyncedState = <T>(
  target: Target,
  initialState: State<T>
): [State<T>, (id: string, action: Action, payload: T) => void] => {
  const socket = useSocket();
  const [state, dispatch] = useBasicReducer<T>(initialState);
  socket.on(target, (msg: StateAction<T>) => {
    dispatch(msg);
  });
  return [
    state,
    (id: Id, action: Action, payload: T) => {
      socket.emit(target, <StateAction<T>>{
        id: id,
        action: action,
        payload: payload,
      });
    },
  ];
};
