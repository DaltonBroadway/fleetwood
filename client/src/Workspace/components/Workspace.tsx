import { EditorWindow } from "./EditorWindow";

type Props = {};

export const Workspace = (props: Props) => {
  return (
    <div className="workspace">
      <EditorWindow />
    </div>
  );
};
