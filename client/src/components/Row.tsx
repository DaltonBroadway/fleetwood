import { useContext } from "react";
import { RowContext, RowDispatchContext } from "../contexts/RowContext";
import { Id } from "../hooks/types";

export const Row = ({ id }: { id: Id }) => {
  const state = useContext(RowContext)[id];
  const dispatch = useContext(RowDispatchContext);
  return <div className="row"></div>;
};
