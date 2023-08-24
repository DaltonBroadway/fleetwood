interface IListBoxItem {
  label: string;
  dynamic?: boolean;
  onClick?: () => void;
  onClose?: () => void;
}

export const ListBoxItem = ({
  label,
  dynamic = true,
  onClick = () => {},
  onClose = () => {},
}: IListBoxItem) => {
  return (
    <div
      key={label}
      className={`listbox-item${dynamic ? "" : " static"}`}
      onClick={onClick}
    >
      <p>{label}</p>
      {!dynamic ? null : (
        <button className="listbox-item-close-btn" onClick={onClose}>
          x
        </button>
      )}
    </div>
  );
};
