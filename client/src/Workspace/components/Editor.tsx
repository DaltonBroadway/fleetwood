import { useEffect } from "react";
import { EditorState } from "../hooks/useEditor";

interface EditorProps {
  editors: EditorState[];
}

export const Editor = ({ editors }: EditorProps) => {
  let activeEditor = editors.filter(({ active }) => {
    return active;
  })[0];
  useEffect(() => {
    document.title = `${activeEditor.name}`;
  }, [activeEditor]);
  return <div className="editor"></div>;
};
