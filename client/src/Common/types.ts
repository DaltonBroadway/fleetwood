export type Id = string;

export interface State<T> {
  [id: Id]: T;
}

export type Target = "sheet" | "column" | "row" | "cell";

export type Action = "create" | "update" | "delete";

export type TargetAction = `${Target}-${Action}`;

export interface StateAction<T> {
  id: Id;
  action: Action;
  payload: T;
}
