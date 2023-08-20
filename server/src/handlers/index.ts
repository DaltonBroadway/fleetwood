import { MsgHandlerTuple } from "./types";
import { handlers as sheet } from "./sheet";
import { handlers as cell } from "./cell";
import { handlers as section } from "./section";

export { MsgHandlerTuple } from "./types";

export const handlers: MsgHandlerTuple[] = [...sheet, ...cell, ...section];
