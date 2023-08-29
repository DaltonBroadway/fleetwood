// Basic create/update/delete reducer for maintaining component state.
import { useReducer } from "react";

export type ActionType = "create" | "update" | "delete";

export type TargetId = string;

export interface SyncMsg<T> {
  action: ActionType;
  target: TargetId;
  payload: T;
}

export type State<T> = {
  [id: TargetId]: T;
};

export interface Action<T> {
  action: ActionType;
  payload: State<T>;
}

const basicReducer = <T>(
  state: State<T>,
  { action, target, payload }: SyncMsg<T>
) => {
  switch (action) {
    case "create": {
      return { ...state, [target]: payload };
    }
    case "update": {
      return { ...state, [target]: { ...state[target], ...payload } };
    }
    case "delete": {
      const { [target]: drop, ...newState } = state;
      return newState;
    }
    default:
      return state;
  }
};

export const useBasicReducer = <T>(initialState: State<T>) => {
  return useReducer(basicReducer<T>, initialState);
};
