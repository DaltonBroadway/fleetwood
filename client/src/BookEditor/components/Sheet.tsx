import { useContext } from "react";
import { ColumnContext } from "../contexts/ColumnContext";
import { RowContext } from "../contexts/RowContext";
import { CellContext } from "../contexts/CellContext";
import { Column } from "./Column";
import { Row } from "./Row";
import { Cell } from "./Cell";
import { Sheet as TSheet } from "../types";
import { Target } from "../../Common/types";
import { Id } from "../../Common/types";
import { SheetContext, SheetDispatchContext } from "../contexts/SheetContext";

export const Sheet = ({ id }: { id: Id }) => {
  const columns = useContext(ColumnContext);
  const rows = useContext(RowContext);
  const cells = useContext(CellContext);
  const state = useContext(SheetContext)[id];
  const dispatch = useContext(SheetDispatchContext);
  const onChange = (change: TSheet) => {
    dispatch(id, "update", change);
  };
  const onDelete = () => {
    dispatch(id, "delete", {});
  };
  return (
    <div className="sheet" key={id}>
      {Object.keys(columns).map((col_id) => {
        return <Column id={col_id} />;
      })}
      {Object.keys(rows).map((row_id) => {
        return <Row id={row_id} />;
      })}
      {Object.keys(cells).map((cell_id) => {
        return <Cell id={cell_id} />;
      })}
    </div>
  );
};
