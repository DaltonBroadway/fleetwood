import React from "react";
import { Workspace } from "./Workspace";
import { BookEditor } from "./BookEditor";
import { Book } from "./BookEditor/components/Book";

export interface AppProps {}

const App: React.FunctionComponent<AppProps> = () => {
  return (
    <BookEditor>
      <Book />
    </BookEditor>
  );
};

export default App;
