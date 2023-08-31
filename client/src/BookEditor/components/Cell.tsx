import { useContext } from "react";
import { CellContext, CellDispatchContext } from "../contexts/CellContext";
import { Cell as TCell } from "../types";
import { Id } from "../../Common/types";

export const Cell = ({ id }: { id: Id }) => {
  const state = useContext(CellContext)[id];
  const dispatch = useContext(CellDispatchContext);
  const onChange = (change: TCell) => {
    dispatch(id, "update", change);
  };
  const onDelete = () => {
    dispatch(id, "delete", {});
  };
  return <div className="cell" key={id}></div>;
};
