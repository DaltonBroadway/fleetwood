import { Id, Sheet, StateAction, Target } from "../../shared/types";
import { useBasicHandler } from "../useBasicHandler";

//  1. Only exports [target, fn]. fn switches incoming actions with individual
//     handlers.
//  2. Individual handlers are not called directly outside of the switch.
//  3. Individual handlers are named <action>Handler.
//  4. Individual handlers take an optional callback which...
//  5. Individual handlers return an optional value which is the result of the
//     callback passed in

const TARGET: Target = "sheet";

const createHandler = (parent_id: Id, payload: Sheet) => {};

const updateHandler = (id: Id, payload: Sheet) => {};

const deleteHandler = (id: Id, payload: Sheet) => {};

const badAction = (parent_id: Id, id: Id, action: string, payload: Sheet) => {};

const basicHandler = useBasicHandler<Sheet>(
  createHandler,
  updateHandler,
  deleteHandler,
  badAction
);

export const sheetHandler: _T = [TARGET, basicHandler];

type _T = [
  Target,
  (parent_id: string, { id, action, payload }: StateAction<Sheet>) => void
];
