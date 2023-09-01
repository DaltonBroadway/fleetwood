import { Id, Row, StateAction, Target } from "../../shared/types";
import { useBasicHandler } from "./../useBasicHandler";

//  1. Only exports [target, fn]. fn switches incoming actions with individual
//     handlers.
//  2. Individual handlers are not called directly outside of the switch.
//  3. Individual handlers are named <action>Handler.
//  4. Individual handlers take an optional callback which...
//  5. Individual handlers return an optional value which is the result of the
//     callback passed in

const TARGET: Target = "row";

const createHandler = (parent_id: Id, payload: Row) => {};

const updateHandler = (id: Id, payload: Row) => {};

const deleteHandler = (id: Id, payload: Row) => {};

const badAction = (parent_id: Id, id: Id, action: string, payload: Row) => {};

const basicHandler = useBasicHandler<Row>(
  createHandler,
  updateHandler,
  deleteHandler,
  badAction
);

export const rowHandler: _T = [TARGET, basicHandler];

type _T = [
  Target,
  (parent_id: string, { id, action, payload }: StateAction<Row>) => void
];
