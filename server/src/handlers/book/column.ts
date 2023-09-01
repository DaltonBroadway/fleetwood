import { Column, Id, StateAction, Target } from "../../shared/types";
import { useBasicHandler } from "./../useBasicHandler";

//  1. Single export fn returns [target, fn] that switches incoming actions with
//     individual handlers.
//  2. Individual handlers are not called directly outside of the switch.
//  3. Individual handlers are named <action>Handler.
//  4. Individual handlers take an optional callback which...
//  5. Individual handlers return an optional value which is the result of the
//     passed in callback

const TARGET: Target = "column";

const createHandler = (parent_id: Id, payload: Column) => {};

const updateHandler = (id: Id, payload: Column) => {};

const deleteHandler = (id: Id, payload: Column) => {};

const badAction = (
  parent_id: Id,
  id: Id,
  action: string,
  payload: Column
) => {};

const basicHandler = useBasicHandler<Column>(
  createHandler,
  updateHandler,
  deleteHandler,
  badAction
);

export const columnHandler: _T = [TARGET, basicHandler];

type _T = [
  Target,
  (parent_id: string, { id, action, payload }: StateAction<Column>) => void
];
