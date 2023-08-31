// Provides a list of objects that represent child component state
// and a function to update both local and server state through context
import { createContext } from "react";
import { Sheet } from "../../shared/types";
import { useServerSyncedState } from "../../Common/hooks/useServerSyncedState";

const [sheets, sheetsDispatch] = useServerSyncedState<Sheet>("sheet", {});

export const SheetContext = createContext(sheets);
export const SheetDispatchContext = createContext(sheetsDispatch);

export const SheetContextComponent = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  return (
    <SheetContext.Provider value={sheets}>
      <SheetDispatchContext.Provider value={sheetsDispatch}>
        {children}
      </SheetDispatchContext.Provider>
    </SheetContext.Provider>
  );
};
