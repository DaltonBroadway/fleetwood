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
