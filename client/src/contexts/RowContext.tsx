import { createContext } from "react";
import { Row } from "../hooks/types";
import { useServerSyncedState } from "../hooks/useServerSyncedState";

const [rows, rowsDispatch] = useServerSyncedState<Row>("row", {});

export const RowContext = createContext(rows);
export const RowDispatchContext = createContext(rowsDispatch);

export const RowContextComponent = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  return (
    <RowContext.Provider value={rows}>
      <RowDispatchContext.Provider value={rowsDispatch}>
        {children}
      </RowDispatchContext.Provider>
    </RowContext.Provider>
  );
};
