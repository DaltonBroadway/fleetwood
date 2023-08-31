import { useContext } from "react";
import { SheetContext } from "../contexts/SheetContext";
import { Sheet } from "./Sheet";

export const Book = () => {
  const sheets = useContext(SheetContext);
  return (
    <div className="book">
      {Object.keys(sheets).map((sheet_id) => {
        return <Sheet id={sheet_id} />;
      })}
    </div>
  );
};
