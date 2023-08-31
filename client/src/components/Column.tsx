import { useContext } from "react";
import {
  ColumnContext,
  ColumnDispatchContext,
} from "../contexts/ColumnContext";
import { Id } from "../hooks/types";

export const Column = ({ id }: { id: Id }) => {
  const state = useContext(ColumnContext)[id];
  const dispatch = useContext(ColumnDispatchContext);
  return <div className="column"></div>;
};
