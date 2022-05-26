import React, {useContext} from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Login from "./pages/Login";
import MyContext from "./context";

function App() {
  const { auth } = useContext(MyContext);

  return (
    <Routes>
      {auth ? (
        <>
          <Route path="/" element={<h1>Home</h1>} />
          <Route path="/login" element={<Navigate to="/" />} />
          <Route path="*" element={<Navigate to="/" />} />
        </>
      ) : (
        <>
          <Route path="/" element={<Navigate to="/login" />} />
          <Route path="/login" element={<Login />} />
          <Route path="*" element={<Navigate to="/login" />} />
        </>
      )}
      {/* <Route path="/login" element={<Login />} /> */}
    </Routes>
  );
}

export default App;
