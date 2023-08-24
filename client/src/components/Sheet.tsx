import { useContext } from "react";
import { ColumnContext } from "../contexts/ColumnContext";
import { RowContext } from "../contexts/RowContext";
import { CellContext } from "../contexts/CellContext";
import { State } from "../hooks/useBasicReducer";
import { Sheet as ISheet } from "../contexts/SheetContext";

export const Sheet = (initialState: State<ISheet>) => {
  const columns = useContext(ColumnContext);
  const rows = useContext(RowContext);
  const cells = useContext(CellContext);
  return <div className="sheet"></div>;
};
