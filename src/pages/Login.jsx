import React, {useState, useContext} from 'react';
import {Button, CssBaseline, TextField, Paper, Box, Grid} from '@mui/material';
import LoadingButton from '@mui/lab/LoadingButton';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import loginImg from '../assets/loginImg.png';
import MyContext from '../context';
import axios from 'axios';
import '../styles/Login.css';

const theme = createTheme();

export default function SignInSide() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const { handleLogin, URL } = useContext(MyContext);

  const handleSubmit = (event) => {
    event.preventDefault();
    setError(false);
    setLoading(true);
    axios.post(`${URL}/auth/login`, {
      email,
      password,
    }).then(response => {
      handleLogin(response.data.token);
      console.log(response.data)
      setLoading(false);
    }).catch(error => {
      setError(true);
      setLoading(false);
      console.log(error);
    });
  };

  return (
    <ThemeProvider theme={theme}>
      <Grid container component="main" sx={{ height: '100vh' }}>
        <CssBaseline />
        <Grid
          item
          xs={false}
          sm={4}
          md={7}
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <img src={loginImg} alt="login" className='loginImg' />
        </Grid>
        <Grid
          item
          xs={12}
          sm={8}
          md={5}
          component={Paper}
          elevation={6}
          square
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
          }}
          >
          <Box
            sx={{
              my: 8,
              mx: 4,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <h1 className='loginTitle'>
              Bem-vindo!
            </h1>
            <h2 className='loginSubTitle'>
            Faça login para acessar nossa plataforma
            </h2>
            <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 1 }}>
              <TextField
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email"
                value={email}
                autoComplete="email"
                autoFocus
                onChange={(e) => setEmail(e.target.value)}
              />
              <TextField
                margin="normal"
                required
                fullWidth
                value={password}
                label="Senha"
                type="password"
                id="password"
                autoComplete="current-password"
                onChange={(e) => setPassword(e.target.value)}
              />
              {error && (<p className='errorMessage'>Usuário ou senha inválidos</p>)}
              <LoadingButton
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2, backgroundColor: '#12295B', height: '56px' }}
                loading={loading}
              >
                Fazer login
              </LoadingButton>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}