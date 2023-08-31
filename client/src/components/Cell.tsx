import { useContext } from "react";
import { CellContext, CellDispatchContext } from "../contexts/CellContext";
import { Id } from "../hooks/types";

export const Cell = ({ id }: { id: Id }) => {
  const state = useContext(CellContext)[id];
  const dispatch = useContext(CellDispatchContext);
  return <div className="cell"></div>;
};
