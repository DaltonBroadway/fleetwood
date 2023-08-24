import { useContext } from "react";
import { Sheet } from "./Sheet";
import { SheetContext } from "../contexts/SheetContext";

export const Book = () => {
  const sheets = useContext(SheetContext);
  return (
    <div className="book">
      {Object.entries(sheets).map((sheet) => {
        return <Sheet tate={sheet[1]}></Sheet>;
      })}
    </div>
  );
};
