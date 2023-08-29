import { useContext } from "react";
import { RowContext, RowDispatchContext } from "../contexts/RowContext";

export const Row = ({ children }: { children: React.ReactNode }) => {
  const rows = useContext(RowContext);
  const rowsDispatch = useContext(RowDispatchContext);
  return <div className="row-runner">{children}</div>;
};
