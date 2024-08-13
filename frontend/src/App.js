import React from "react";
import { Route, Routes } from "react-router-dom";
import Intro from "./components/intro.js";


const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Intro />} />
      </Routes>
    </div>
  )
}

export default App;