import React, {useState, useEffect} from 'react'
import MyContext from '.';

function Provider({children}) {
  const [token, setToken] = useState(null);
  const [auth, setAuth] = useState(false);

  const URL = 'https://contacts-api.prd.parceirodaconstrucao.com.br';

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      setToken(token);
      setAuth(true);
    }
  }, []);

  const handleLogin = (token) => {
    localStorage.setItem('token', token);
    setToken(token);
    setAuth(true);
  };

  const handleLogout = () => {
    localStorage.removeItem('token');
    setToken(null);
    setAuth(false);
  };

  const contextValue = {
    token,
    auth,
    handleLogin,
    handleLogout,
    URL,
  };

  return (
    <MyContext.Provider value={contextValue}>
      {children}
    </MyContext.Provider>
  )
}

export default Provider;