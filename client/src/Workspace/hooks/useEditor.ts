import { useReducer } from "react";

type Action = "new-editor" | "close-editor" | "activate-editor";

export interface EditorState {
  name: string;
  active?: boolean;
}

export interface EditorPayload {
  action: Action;
  payload: EditorState;
}

const editorReducer = (state: EditorState[], action: EditorPayload) => {
  switch (action.action) {
    case "new-editor": {
      return [
        ...state.map((editor) => {
          return { ...editor, active: false };
        }),
        { ...action.payload, active: true },
      ];
    }
    case "close-editor": {
      return state.filter(({ name }) => {
        return name !== action.payload.name;
      });
    }
    case "activate-editor": {
      return state.map((editor) => {
        if (editor.name === action.payload.name) {
          return { ...editor, active: true };
        } else {
          return { ...editor, active: false };
        }
      });
    }
    default:
      return state;
  }
};

export const useEditor = (initialState: EditorState[]) => {
  return useReducer(editorReducer, initialState);
};
