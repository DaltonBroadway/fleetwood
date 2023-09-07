import { ColumnContextComponent } from "../contexts/ColumnContext";
import { RowContextComponent } from "../contexts/RowContext";
import { CellContextComponent } from "../contexts/CellContext";
import { SheetContextComponent } from "../contexts/SheetContext";

export const BookEditor = ({ children }: { children: React.ReactNode }) => {
  // TODO add a hook here for caching
  return (
    <SheetContextComponent initialState={{}}>
      <ColumnContextComponent initialState={{}}>
        <RowContextComponent initialState={{}}>
          <CellContextComponent initialState={{}}>
            <div className="book-editor">{children}</div>
          </CellContextComponent>
        </RowContextComponent>
      </ColumnContextComponent>
    </SheetContextComponent>
  );
};
