//  1:1 MATCH
//  ./client/src/types.ts
//  ./server/src/types.ts

//////////  STATE  //////////
export type Id = string;

export interface State<T> {
  [id: Id]: T;
}

//////////  ACTION  //////////
export type Target = "sheet" | "column" | "row" | "cell";
export type Action = "create" | "update" | "delete";
export interface StateAction<T> {
  id: Id;
  action: Action;
  payload: T;
}

//////////  DTO  //////////
export interface SyncedStateAction<T> {
  parent_id: Id;
  state: StateAction<T>[];
}

//////////  OBJECT TYPES <T>  //////////
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
