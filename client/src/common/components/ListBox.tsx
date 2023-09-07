interface IListBox {
  children: JSX.Element[];
  id: string;
  sticky: "nw" | "ne" | "sw" | "se";
  direction?: "vertical" | "horizontal";
  grow?: "n" | "s" | "e" | "w" | null;
}

export const ListBox = ({
  children,
  id,
  sticky,
  direction = "vertical",
  grow = null,
}: IListBox) => {
  return (
    <div
      id={id}
      className={[
        "listbox",
        `lb-${direction}`,
        `${grow ? `lb-grow-${grow}` : ""}`,
        `lb-sticky-${sticky}`,
      ].join(" ")}
    >
      {children}
    </div>
  );
};
