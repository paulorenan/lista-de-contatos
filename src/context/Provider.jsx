import React, {useState, useEffect} from 'react'
import MyContext from '.';
import axios from 'axios';

function Provider({children}) {
  const [token, setToken] = useState(null);
  const [auth, setAuth] = useState(false);

  const URL = 'https://contacts-api.prd.parceirodaconstrucao.com.br';

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      setToken(token);
      setAuth(true);
      axios.defaults.headers.common['Authorization'] = `bearer ${token}`;
    }
  }, []);

  const handleLogin = (token) => {
    localStorage.setItem('token', token);
    setToken(token);
    setAuth(true);
    axios.defaults.headers.common['Authorization'] = `bearer ${token}`;
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
    axios,
  };

  return (
    <MyContext.Provider value={contextValue}>
      {children}
    </MyContext.Provider>
  )
}

export default Provider;