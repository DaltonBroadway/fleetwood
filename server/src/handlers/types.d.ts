export interface CreateMsg {
  targetParent: string;
  targetKey: string;
  targetValue: string;
}

export interface UpdateMsg {
  target: string;
  targetKey: string;
  targetValue: string;
}

export interface DeleteMsg {
  target: string;
}

export type handlerFunc =
  | ((data: CreateMsg) => void)
  | ((data: UpdateMsg) => void)
  | ((data: DeleteMsg) => void);

export type MsgHandlerTuple = [msg: string, handler: handlerFunc];
