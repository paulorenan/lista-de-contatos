import React, {useContext} from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Login from "./pages/Login";
import Contacts from "./pages/Contacts";
import MyContext from "./context";

function App() {
  const { auth } = useContext(MyContext);

  return (
    <Routes>
      {auth ? (
        <>
          <Route path="contacts" element={<Contacts />} />
          <Route path="/" element={<Navigate to="/contacts" />} />
          <Route path="login" element={<Navigate to="/contacts" />} />
          <Route path="*" element={<Navigate to="/contacts" />} />
        </>
      ) : (
        <>
          <Route path="/" element={<Navigate to="/login" />} />
          <Route path="login" element={<Login />} />
          <Route path="*" element={<Navigate to="/login" />} />
        </>
      )}
    </Routes>
  );
}

export default App;
