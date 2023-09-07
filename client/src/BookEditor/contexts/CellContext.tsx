import { createContext } from "react";
import { State, Action, Cell } from "../../shared/types";
import { useServerSyncedState } from "../../Common/hooks/useServerSyncedState";

export const CellContext = createContext({} as State<Cell>);
export const CellDispatchContext = createContext(
  (id: string, action: Action, payload: Cell) => {}
);

type Props = {
  initialState: State<Cell>;
  children: React.ReactNode;
};

export const CellContextComponent = ({ initialState, children }: Props) => {
  const [cells, cellsDispatch] = useServerSyncedState<Cell>(
    "cell",
    initialState
  );
  return (
    <CellContext.Provider value={cells}>
      <CellDispatchContext.Provider value={cellsDispatch}>
        {children}
      </CellDispatchContext.Provider>
    </CellContext.Provider>
  );
};
