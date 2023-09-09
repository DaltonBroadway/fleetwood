import { useState } from "react";
import { Id } from "../../shared/types";

type Props = {
  id: Id;
};

export const Sheet = ({ id }: Props) => {
  // const [activeCell, setActiveCell] = useState("" as Id);
  const columns = Array.from({ length: 20 }, (x, i) => i);
  const rows = Array.from({ length: 80 }, (x, i) => i);
  return (
    <div className="sheet">
      <div className="header-label corner">X</div>
      {columns.map((idx) => {
        return <div className="header-label column">{idx}</div>;
      })}
      {rows.map((idx) => {
        return <div className="header-label row">{idx}</div>;
      })}
    </div>
  );
};
