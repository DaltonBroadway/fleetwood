import { useEditor } from "../hooks/useEditor";
import { Editor } from "./Editor";
import { OpenEditorsBar } from "./OpenEditorsBar";

export const EditorWindow = () => {
  const [editors, dispatch] = useEditor([]);
  return (
    <div className="editor-window">
      <OpenEditorsBar editors={editors} dispatch={dispatch} />
      <Editor editors={editors} />
    </div>
  );
};
