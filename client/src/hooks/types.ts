export type Id = string;

export type Sheet = {
  seq?: number;
  name?: string;
};

export type Column = {
  seq?: number;
  width?: number;
};

export type Row = {
  seq?: number;
  height?: number;
};

export type Cell = {
  column?: number;
  row?: number;
  value?: string;
};

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
