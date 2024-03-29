import { useContext } from "react";
import { RowContext, RowDispatchContext } from "../contexts/RowContext";
import { Row as TRow, Id } from "../../shared/types";

export const Row = ({ id }: { id: Id }) => {
  const state = useContext(RowContext)[id];
  const dispatch = useContext(RowDispatchContext);
  const onChange = (change: TRow) => {
    dispatch(id, "update", change);
  };
  const onDelete = () => {
    dispatch(id, "delete", {});
  };
  return <div className="row" key={id}></div>;
};
