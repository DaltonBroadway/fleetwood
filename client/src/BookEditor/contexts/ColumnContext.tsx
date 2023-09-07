import { createContext } from "react";
import { Action, Column, State } from "../../shared/types";
import { useServerSyncedState } from "../../Common/hooks/useServerSyncedState";

export const ColumnContext = createContext({} as State<Column>);
export const ColumnDispatchContext = createContext(
  (id: string, action: Action, payload: Column) => {}
);

type Props = {
  initialState: State<Column>;
  children: React.ReactNode;
};

export const ColumnContextComponent = ({ initialState, children }: Props) => {
  const [columns, columnsDispatch] = useServerSyncedState<Column>(
    "column",
    initialState
  );
  return (
    <ColumnContext.Provider value={columns}>
      <ColumnDispatchContext.Provider value={columnsDispatch}>
        {children}
      </ColumnDispatchContext.Provider>
    </ColumnContext.Provider>
  );
};
