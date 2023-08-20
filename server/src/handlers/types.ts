type Collection = "sheet" | "column" | "row" | "cell" | "section";

interface Delta {
  targetKey: string;
  targetValue: string;
}

export interface CreateMsg {
  target: string;
  targetCollection: Collection;
  defaults: Delta[] | null;
}

export interface UpdateMsg {
  target: string;
  targetCollection: Collection;
  updates: Delta[];
}

export interface DeleteMsg {
  target: string;
  targetCollection: Collection;
}

export interface Msg {
  session_id: string;
  create?: CreateMsg[];
  update?: UpdateMsg[];
  delete?: DeleteMsg[];
}

export type handlerFunc =
  | ((data: CreateMsg) => void)
  | ((data: UpdateMsg) => void)
  | ((data: DeleteMsg) => void);

export type MsgHandlerTuple = [msg: string, handler: handlerFunc];
