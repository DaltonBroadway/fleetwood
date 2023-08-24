import { createContext } from "react";
import { useBasicReducer } from "../hooks/useBasicReducer";

// interface State {
//   seq?: number;
//   width?: number;
// }

// export interface ColumnState {
//   [id: string]: State;
// }

// type Action = "create-column" | "update-column" | "delete-column";

// interface Payload extends State {
//   column_id: string;
// }

// export interface ColumnAction {
//   action: Action;
//   payload: Payload;
// }

// const columnReducer = (
//   state: ColumnState,
//   { action, payload }: ColumnAction
// ) => {
//   const { column_id, ...incomingState } = payload;
//   switch (action) {
//     case "create-column": {
//       return { ...state, [column_id]: incomingState };
//     }
//     case "update-column": {
//       return { ...state, [column_id]: { ...incomingState } };
//     }
//     case "delete-column": {
//       const { [column_id]: drop, ...newState } = state;
//       return newState;
//     }
//     default:
//       return state;
//   }
// };

// const [columns, columnDispatch] = useReducer(columnReducer, {});

export interface Column {
  seq: number;
  width: number;
}

const [columns, columnDispatch] = useBasicReducer<Column>({});
export const ColumnContext = createContext(columns);
export const ColumnDispatchContext = createContext(columnDispatch);
