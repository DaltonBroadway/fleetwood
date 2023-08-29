import { SheetContextComponent } from "../contexts/SheetContext";

export const Book = ({ children }: { children: React.ReactNode }) => {
  return (
    <SheetContextComponent>
      <div className="book">{children}</div>
    </SheetContextComponent>
  );
};
