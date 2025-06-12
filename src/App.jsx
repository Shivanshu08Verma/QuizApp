import { useState } from "react";
import "./App.css";

import Header from "./components/Header";
import Home from "./components/Home";
import { Outlet } from "react-router-dom";
;

function App() {
  const [started, setStarted] = useState(false);
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
}

export default App;
