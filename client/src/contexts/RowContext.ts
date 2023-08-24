import { createContext } from "react";
import { useBasicReducer } from "../hooks/useBasicReducer";

// interface State {
//   seq?: number;
//   height?: number;
// }

// export interface RowState {
//   [id: string]: State;
// }

// type Action = "create-row" | "update-row" | "delete-row";

// interface Payload extends State {
//   row_id: string;
// }

// export interface RowAction {
//   action: Action;
//   payload: Payload;
// }

// const rowReducer = (state: RowState, { action, payload }: RowAction) => {
//   const { row_id, ...incomingState } = payload;
//   switch (action) {
//     case "create-row": {
//       return { ...state, [row_id]: incomingState };
//     }
//     case "update-row": {
//       return { ...state, [row_id]: { ...incomingState } };
//     }
//     case "delete-row": {
//       const { [row_id]: drop, ...newState } = state;
//       return newState;
//     }
//     default:
//       return state;
//   }
// };

// const [rows, rowDispatch] = useReducer(rowReducer, {});

export interface Row {
  seq: number;
  height: number;
}

const [rows, rowDispatch] = useBasicReducer<Row>({});
export const RowContext = createContext(rows);
export const RowDispatchContext = createContext(rowDispatch);
