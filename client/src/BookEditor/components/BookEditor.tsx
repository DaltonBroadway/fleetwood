import { ColumnContextComponent } from "../contexts/ColumnContext";
import { RowContextComponent } from "../contexts/RowContext";
import { CellContextComponent } from "../contexts/CellContext";
import { SheetContextComponent } from "../contexts/SheetContext";

//  1. Retrieves inital state from cache & initializes context for Sheet,
//     Column, Row & Cell
//  2. Retrieves/pushes state from/to cache on activation/deactivation  // This should be a hook

type Props = {
  children: React.ReactNode;
};

export const BookEditor = ({ children }: Props) => {
  // TODO add a hook here for caching
  const sheets = {
    b2e3: { seq: 0, name: "First Sheet" },
    vw3g: { seq: 1, name: "Revenue" },
    c3wd: { seq: 2, name: "Expenses" },
  };
  const columns = {
    f4q2: { seq: 1, width: 20 },
  };
  const rows = {
    r3fq: { seq: 1, height: 15 },
    jw35: { seq: 2, height: 15 },
  };
  const cells = {
    vwt5: { column: 1, row: 0, value: "Cell1" },
    vf32: { column: 1, row: 1, value: "Cell2" },
    m6s3: { column: 0, row: 2, value: "Cell3" },
    n78u: { column: 2, row: 2, value: "Cell4" },
  };
  return (
    <SheetContextComponent initialState={sheets}>
      <ColumnContextComponent initialState={columns}>
        <RowContextComponent initialState={rows}>
          <CellContextComponent initialState={cells}>
            {children}
          </CellContextComponent>
        </RowContextComponent>
      </ColumnContextComponent>
    </SheetContextComponent>
  );
};
