import * as React from "react";
import { Routes, Route, Link } from "react-router-dom";
import "./App.css";
import Login from "./pages/Login";

function App() {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
    </Routes>
  );
}

export default App;
