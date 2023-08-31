// Basic create/update/delete reducer for maintaining component state.
import { useReducer } from "react";
import { State, StateAction } from "../types";

const basicReducer = <T>(
  state: State<T>,
  { id, action, payload }: StateAction<T>
) => {
  switch (action) {
    case "create": {
      return { ...state, [id]: payload };
    }
    case "update": {
      return { ...state, [id]: { ...state[id], ...payload } };
    }
    case "delete": {
      const { [id]: drop, ...newState } = state;
      return newState;
    }
    default:
      return state;
  }
};

export const useBasicReducer = <T>(initialState: State<T>) => {
  return useReducer(basicReducer<T>, initialState);
};
