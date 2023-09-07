import { useContext, useState } from "react";
import { SheetContext } from "../contexts/SheetContext";
import { Sheet } from "./Sheet";
import { Id } from "../../shared/types";
import { SheetSelector } from "./SheetSelector";

export const Book = () => {
  const sheetIds = Object.keys(useContext(SheetContext));
  const [activeSheet, setActiveSheet] = useState("vw3g" as Id); // TEMPORARY
  return (
    <div className="book">
      <Sheet id={activeSheet} />
      <SheetSelector
        sheetIds={sheetIds}
        active={activeSheet}
        setActive={setActiveSheet}
      />
    </div>
  );
};
