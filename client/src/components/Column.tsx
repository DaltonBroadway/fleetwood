import { useContext } from "react";
import {
  ColumnContext,
  ColumnDispatchContext,
} from "../contexts/ColumnContext";

export const Column = ({ children }: { children: React.ReactNode }) => {
  const columns = useContext(ColumnContext);
  const columnsDispatch = useContext(ColumnDispatchContext);
  return <div className="column-runner">{children}</div>;
};
