import { MsgHandlerTuple } from "./types";
import { handlers as sheet } from "./sheet";
import { handlers as column } from "./column";
import { handlers as row } from "./row";
import { handlers as cell } from "./cell";
import { handlers as section } from "./section";

export { MsgHandlerTuple } from "./types";

export const handlers: MsgHandlerTuple[] = [
  ...sheet,
  ...column,
  ...row,
  ...cell,
  ...section,
];
