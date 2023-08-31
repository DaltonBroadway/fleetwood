import { ColumnContextComponent } from "../contexts/ColumnContext";
import { RowContextComponent } from "../contexts/RowContext";
import { CellContextComponent } from "../contexts/CellContext";
import { SheetContextComponent } from "../contexts/SheetContext";

export const BookEditor = ({ children }: { children: React.ReactNode }) => {
  return (
    <SheetContextComponent>
      <ColumnContextComponent>
        <RowContextComponent>
          <CellContextComponent>
            <div className="book-editor">{children}</div>
          </CellContextComponent>
        </RowContextComponent>
      </ColumnContextComponent>
    </SheetContextComponent>
  );
};
