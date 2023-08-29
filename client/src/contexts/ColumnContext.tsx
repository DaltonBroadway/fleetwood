import { createContext } from "react";
import { useBasicReducer } from "../hooks/useBasicReducer";
import { useInboundSocketBroker } from "../hooks/useInboundSocketBroker";
import { useOutboundSocketBroker } from "../hooks/useOutboundSocketBroker";

export interface Column {
  seq: number;
  width: number;
}

const [columns, columnDispatch] = useBasicReducer<Column>({});

useInboundSocketBroker<Column>("column", columnDispatch);
const outboundDispatch = useOutboundSocketBroker<Column>(
  "column",
  columnDispatch
);

export const ColumnContext = createContext(columns);
export const ColumnDispatchContext = createContext(outboundDispatch);

export const ColumnContextComponent = (
  children: JSX.Element | JSX.Element[]
) => {
  return (
    <ColumnContext.Provider value={columns}>
      <ColumnDispatchContext.Provider value={outboundDispatch}>
        {children}
      </ColumnDispatchContext.Provider>
    </ColumnContext.Provider>
  );
};
