type CellProps = {
  column: number;
  row: number;
  value: string;
  styles: { [style: string]: string | number | boolean };
};

export const Cell = ({ column, row, value, styles }: CellProps) => {
  return <div>{value}</div>;
};
