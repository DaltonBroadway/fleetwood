import { useContext } from "react";
import { SheetContext } from "../contexts/SheetContext";

type Props = {
  active: string;
  setActive: React.Dispatch<React.SetStateAction<string>>;
};

export const SheetSelector = ({ active, setActive }: Props) => {
  const sheets = useContext(SheetContext);
  return (
    <div className="sheet-selector">
      {Object.keys(useContext(SheetContext)).map((sheetId) => {
        return (
          <div
            className={`sheet-tab${sheetId === active ? " active" : ""}`}
            key={sheetId}
            onClick={() => setActive(sheetId)}
          >
            {sheets[sheetId].name}
          </div>
        );
      })}
    </div>
  );
};
