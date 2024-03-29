import { useContext } from "react";
import {
  ColumnContext,
  ColumnDispatchContext,
} from "../contexts/ColumnContext";
import { Column as TColumn, Id } from "../../shared/types";

export const Column = ({ id }: { id: Id }) => {
  const state = useContext(ColumnContext)[id];
  const dispatch = useContext(ColumnDispatchContext);
  const onChange = (change: TColumn) => {
    dispatch(id, "update", change);
  };
  const onDelete = () => {
    dispatch(id, "delete", {});
  };
  return <div className="column" key={id}></div>;
};
