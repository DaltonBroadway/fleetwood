import { createContext } from "react";
import { useBasicReducer } from "../hooks/useBasicReducer";

export interface Cell {
  column: number;
  row: number;
  value: string;
}

const [cells, cellDispatch] = useBasicReducer<Cell>({});
export const CellContext = createContext(cells);
export const CellDispatchContext = createContext(cellDispatch);
