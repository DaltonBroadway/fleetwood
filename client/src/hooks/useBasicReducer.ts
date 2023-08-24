import { useReducer } from "react";

export interface State<T> {
  [id: string]: T;
}

export interface Action<T> {
  action: "create" | "update" | "delete";
  payload: State<T>;
}

const basicReducer = <T>(state: State<T>, { action, payload }: Action<T>) => {
  const [id, incomingState] = Object.entries(payload)[0];
  switch (action) {
    case "create": {
      return { ...state, [id]: incomingState };
    }
    case "update": {
      return { ...state, [id]: { ...incomingState } };
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
