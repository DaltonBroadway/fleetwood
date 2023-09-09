import React from "react";
import { BookEditor } from "./BookEditor";
import { Book } from "./BookEditor/components/Book";
import { EditorWindow } from "./EditorWindow";

export interface AppProps {}

const App: React.FunctionComponent<AppProps> = () => {
  return (
    <EditorWindow>
      <BookEditor>
        <Book />
      </BookEditor>
    </EditorWindow>
  );
};

export default App;
