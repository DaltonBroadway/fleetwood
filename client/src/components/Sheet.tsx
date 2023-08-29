import { useContext } from "react";
import {
  ColumnContext,
  ColumnDispatchContext,
} from "../contexts/ColumnContext";
import { RowContext, RowDispatchContext } from "../contexts/RowContext";
import { CellContext, CellDispatchContext } from "../contexts/CellContext";
import { State } from "../hooks/useBasicReducer";
import {
  Sheet as ISheet,
  SheetContext,
  SheetDispatchContext,
} from "../contexts/SheetContext";

export const Sheet = (initialState: State<ISheet>) => {
  const columns = useContext(ColumnContext);
  const columnsDispatch = useContext(ColumnDispatchContext);
  const sheets = useContext(SheetContext);
  const sheetsDispatch = useContext(SheetDispatchContext);
  const rows = useContext(RowContext);
  const rowsDispatch = useContext(RowDispatchContext);
  const cells = useContext(CellContext);
  const cellsDispatch = useContext(CellDispatchContext);
  return <div className="sheet"></div>;
};
