import { createContext } from "react";
import { Cell } from "../hooks/types";
import { useServerSyncedState } from "../hooks/useServerSyncedState";

const [cells, cellsDispatch] = useServerSyncedState<Cell>("cell", {});

export const CellContext = createContext(cells);
export const CellDispatchContext = createContext(cellsDispatch);

export const CellContextComponent = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  return (
    <CellContext.Provider value={cells}>
      <CellDispatchContext.Provider value={cellsDispatch}>
        {children}
      </CellDispatchContext.Provider>
    </CellContext.Provider>
  );
};
