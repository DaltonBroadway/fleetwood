import { createContext } from "react";
import { useBasicReducer } from "../hooks/useBasicReducer";

// interface State {
//   name?: string;
//   sheetIds?: string;
// }

// export interface SheetState {
//   [id: string]: State;
// }

// type Action = "create-sheet" | "update-sheet" | "delete-sheet";

// interface Payload extends State {
//   sheet_id: string;
// }

// export interface SheetAction {
//   action: Action;
//   payload: Payload;
// }

// const sheetReducer = (state: SheetState, { action, payload }: SheetAction) => {
//   const { sheet_id, ...incomingState } = payload;
//   switch (action) {
//     case "create-sheet": {
//       return { ...state, [sheet_id]: incomingState };
//     }
//     case "update-sheet": {
//       return { ...state, [sheet_id]: { ...incomingState } };
//     }
//     case "delete-sheet": {
//       const { [sheet_id]: drop, ...newState } = state;
//       return newState;
//     }
//     default:
//       return state;
//   }
// };

// const [sheets, sheetDispatch] = useReducer(sheetReducer, {});

export interface Sheet {
  name: string;
  seq: number;
}

const [sheets, sheetDispatch] = useBasicReducer<Sheet>({});
export const SheetContext = createContext(sheets);
export const SheetDispatchContext = createContext(sheetDispatch);
