// Provides a list of objects that represent child component state
// and a function to update both local and server state through context
import { createContext } from "react";
import { Action, Sheet, State } from "../../shared/types";
import { useServerSyncedState } from "../../Common/hooks/useServerSyncedState";

export const SheetContext = createContext({} as State<Sheet>);
export const SheetDispatchContext = createContext(
  (id: string, action: Action, payload: Sheet) => {}
);

export const SheetContextComponent = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [sheets, sheetsDispatch] = useServerSyncedState<Sheet>("sheet", {});
  return (
    <SheetContext.Provider value={sheets}>
      <SheetDispatchContext.Provider value={sheetsDispatch}>
        {children}
      </SheetDispatchContext.Provider>
    </SheetContext.Provider>
  );
};
