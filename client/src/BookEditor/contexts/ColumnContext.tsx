import { createContext } from "react";
import { Action, Column, State } from "../../shared/types";
import { useServerSyncedState } from "../../Common/hooks/useServerSyncedState";

export const ColumnContext = createContext({} as State<Column>);
export const ColumnDispatchContext = createContext(
  (id: string, action: Action, payload: Column) => {}
);

export const ColumnContextComponent = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [columns, columnsDispatch] = useServerSyncedState<Column>("column", {});
  return (
    <ColumnContext.Provider value={columns}>
      <ColumnDispatchContext.Provider value={columnsDispatch}>
        {children}
      </ColumnDispatchContext.Provider>
    </ColumnContext.Provider>
  );
};
