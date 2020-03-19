import React from "react";
import { Button } from "reactstrap";

import { useDarkMode } from "./hooks/useDarkMode";
import PlayerTable from "./components/PlayerTable";

function App() {
  const [darkMode, setDarkMode] = useDarkMode();
  return (
    <main className="App">
      <header>
        <Button color="secondary" onClick={() => setDarkMode(!darkMode)}>
          {darkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}
        </Button>
      </header>
      <PlayerTable />
    </main>
  );
}

export default App;
