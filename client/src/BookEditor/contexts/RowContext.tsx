import { createContext } from "react";
import { Action, Row, State } from "../../shared/types";
import { useServerSyncedState } from "../../Common/hooks/useServerSyncedState";

export const RowContext = createContext({} as State<Row>);
export const RowDispatchContext = createContext(
  (id: string, action: Action, payload: Row) => {}
);

type Props = {
  initialState: State<Row>;
  children: React.ReactNode;
};

export const RowContextComponent = ({ initialState, children }: Props) => {
  const [rows, rowsDispatch] = useServerSyncedState<Row>("row", initialState);
  return (
    <RowContext.Provider value={rows}>
      <RowDispatchContext.Provider value={rowsDispatch}>
        {children}
      </RowDispatchContext.Provider>
    </RowContext.Provider>
  );
};
