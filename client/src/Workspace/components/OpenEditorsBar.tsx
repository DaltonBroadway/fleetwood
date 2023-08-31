import { ListBox } from "../../Common/components/ListBox";
import { ListBoxItem } from "../../Common/components/ListBoxItem";
import { EditorState, EditorPayload } from "../hooks/useEditor";

interface IOpenEditorsBar {
  editors: EditorState[];
  dispatch: React.Dispatch<EditorPayload>;
}

export const OpenEditorsBar = ({ editors, dispatch }: IOpenEditorsBar) => {
  const onNewEditor = (name: string) => {
    dispatch({ action: "new-editor", payload: { name: name } });
  };
  const onClick = (name: string) => {
    dispatch({ action: "activate-editor", payload: { name: name } });
  };
  const onClose = (name: string) => {
    dispatch({ action: "close-editor", payload: { name: name } });
  };
  return (
    <>
      <ListBox id="openEditorsBar" sticky="ne" direction="horizontal" grow="e">
        <>
          {editors.map(({ name }) => {
            return (
              <ListBoxItem
                label={name}
                onClick={() => onClick(name)}
                onClose={() => onClose(name)}
              />
            );
          })}
        </>
        <ListBoxItem
          label="New Editor"
          dynamic={false}
          onClick={() => onNewEditor("NewEditor")}
        />
      </ListBox>
    </>
  );
};
