import { useState } from "react";
import { Sheet } from "./Sheet";
import { Id } from "../../shared/types";
import { SheetSelector } from "./SheetSelector";

export const Book = () => {
  const [activeSheet, setActiveSheet] = useState("vw3g" as Id); // TEMPORARY
  return (
    <div className="book">
      <Sheet id={activeSheet} />
      <SheetSelector active={activeSheet} setActive={setActiveSheet} />
    </div>
  );
};
