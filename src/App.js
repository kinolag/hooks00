import React from "react";
import FirstHooks from "./components/Hook01";
import HookMouse from "./components/Hook02";
import FocusInput from "./components/Hook03";
import Callback from "./components/Hook04/Hook04";
import { Entry } from "./components/Hook05_form/Entry";
import { entry } from "./components/Hook05_form/entry-get";
import CircleQuarters from "./components/CircleQuarters.js"

import "./App.css";

function App() {
  return (
    <div className="App">
      <FirstHooks />
      <HookMouse />
      <FocusInput />
      <Callback />
      <Entry entry={entry} />
      <CircleQuarters />
    </div>
  );
}

export default App;
