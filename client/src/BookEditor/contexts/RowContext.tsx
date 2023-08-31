import { createContext } from "react";
import { Row } from "../../shared/types";
import { useServerSyncedState } from "../../Common/hooks/useServerSyncedState";

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
