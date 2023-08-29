import { createContext } from "react";
import { useBasicReducer } from "../hooks/useBasicReducer";
import { useInboundSocketBroker } from "../hooks/useInboundSocketBroker";
import { useOutboundSocketBroker } from "../hooks/useOutboundSocketBroker";

export interface Row {
  seq: number;
  height: number;
}

const [rows, rowDispatch] = useBasicReducer<Row>({});

useInboundSocketBroker<Row>("row", rowDispatch);
const outboundDispatch = useOutboundSocketBroker<Row>("row", rowDispatch);

export const RowContext = createContext(rows);
export const RowDispatchContext = createContext(outboundDispatch);

export const RowContextComponent = (children: JSX.Element | JSX.Element[]) => {
  return (
    <RowContext.Provider value={rows}>
      <RowDispatchContext.Provider value={outboundDispatch}>
        {children}
      </RowDispatchContext.Provider>
    </RowContext.Provider>
  );
};
