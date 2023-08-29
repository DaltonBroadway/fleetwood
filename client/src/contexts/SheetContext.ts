// Provides a list of objects that represent child component state
// and a function to update both local and server state through context
import { createContext } from "react";
import { useBasicReducer } from "../hooks/useBasicReducer";
import { useInboundSocketBroker } from "../hooks/useInboundSocketBroker";
import { useOutboundSocketBroker } from "../hooks/useOutboundSocketBroker";

export interface Sheet {
  name: string;
  seq: number;
}

const [sheets, sheetDispatch] = useBasicReducer<Sheet>({});

useInboundSocketBroker<Sheet>("sheet", sheetDispatch);
const outboundDispatch = useOutboundSocketBroker<Sheet>("sheet", sheetDispatch);

export const SheetContext = createContext(sheets);
export const SheetDispatchContext = createContext(outboundDispatch);
