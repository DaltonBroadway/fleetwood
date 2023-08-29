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
