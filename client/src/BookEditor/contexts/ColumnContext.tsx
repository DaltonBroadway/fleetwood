import { createContext } from "react";
import { Column } from "../../shared/types";
import { useServerSyncedState } from "../../Common/hooks/useServerSyncedState";

const [columns, columnsDispatch] = useServerSyncedState<Column>("column", {});

export const ColumnContext = createContext(columns);
export const ColumnDispatchContext = createContext(columnsDispatch);

export const ColumnContextComponent = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  return (
    <ColumnContext.Provider value={columns}>
      <ColumnDispatchContext.Provider value={columnsDispatch}>
        {children}
      </ColumnDispatchContext.Provider>
    </ColumnContext.Provider>
  );
};
