import { useContext } from "react";
import { SheetContext } from "../contexts/SheetContext";

type Props = {
  sheetIds: string[];
  active: string;
  setActive: React.Dispatch<React.SetStateAction<string>>;
};

export const SheetSelector = ({ sheetIds, active, setActive }: Props) => {
  const sheets = useContext(SheetContext);
  return (
    <div className="sheet-selector">
      {sheetIds.map((sheetId) => {
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
