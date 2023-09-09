type Props = {
  children: React.ReactNode;
};

export const EditorWindow = ({ children }: Props) => {
  return <div className="editor-window">{children}</div>;
};
