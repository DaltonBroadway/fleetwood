import { ColumnContextComponent } from "../contexts/ColumnContext";
import { RowContextComponent } from "../contexts/RowContext";
import { CellContextComponent } from "../contexts/CellContext";

export const Sheet = ({ children }: { children: React.ReactNode }) => {
  return (
    <ColumnContextComponent>
      <RowContextComponent>
        <CellContextComponent>
          <div className="sheet">{children}</div>
        </CellContextComponent>
      </RowContextComponent>
    </ColumnContextComponent>
  );
};
