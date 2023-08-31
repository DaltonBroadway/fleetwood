export type Id = string;

interface Base {
  id?: Id;
}

export interface Sheet extends Base {
  seq: number;
  name: string;
}

export interface Column extends Base {
  seq: number;
  width: number;
}

export interface Row extends Base {
  seq: number;
  height: number;
}

export interface Cell extends Base {
  column: number;
  row: number;
  value: string;
}

export interface State<T> {
  [id: Id]: T;
}

export type Target = "sheet" | "column" | "row" | "cell";

export type Action = "create" | "update" | "delete";

export interface StateAction<T> {
  id: Id;
  action: Action;
  payload: T;
}
