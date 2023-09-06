import { createContext } from "react";
import { State, Action, Cell } from "../../shared/types";
import { useServerSyncedState } from "../../Common/hooks/useServerSyncedState";

export const CellContext = createContext({} as State<Cell>);
export const CellDispatchContext = createContext(
  (id: string, action: Action, payload: Cell) => {}
);

export const CellContextComponent = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [cells, cellsDispatch] = useServerSyncedState<Cell>("cell", {});
  return (
    <CellContext.Provider value={cells}>
      <CellDispatchContext.Provider value={cellsDispatch}>
        {children}
      </CellDispatchContext.Provider>
    </CellContext.Provider>
  );
};
