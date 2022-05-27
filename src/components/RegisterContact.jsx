import React, { useState, useContext } from 'react'
import { Box, TextField, Snackbar, Alert } from '@mui/material';
import LoadingButton from '@mui/lab/LoadingButton';
import MyContext from '../context';

function RegisterContact() {
  const [name, setName] = useState('');
  const [mobile, setMobile] = useState('');
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);
  const [open, setOpen] = useState(false);
  const [snackMessage, setSnackMessage] = useState('');
  const [snackColor, setSnackColor] = useState('');
  const { axios, URL } = useContext(MyContext);

  function handleSubmit(e) {
    e.preventDefault();
    if (name === '' || mobile === '' || email === '') {
      alert('Preencha todos os campos');
    } else {
      setLoading(true);
      axios.post(`${URL}/contacts`, {
        name,
        mobile,
        email,
      })
        .then(() => {
          setSnackColor('success');
          setSnackMessage('Contato cadastrado com sucesso!');
          setOpen(true);
          setLoading(false);
          setName('');
          setMobile('');
          setEmail('');
        })
        .catch(() => {
          setSnackColor('error');
          setSnackMessage('Erro ao cadastrar contato!');
          setOpen(true);
          setLoading(false);
        });
    }
  }

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setOpen(false);
  };

  return (
    <Box sx={{
      alignSelf: 'center',
      marginTop: '2rem',
      marginBottom: '2rem',
      width: '50%',
      minWidth: '250px',
      borderRadius: '8px',
      backgroundColor: '#FFFFFF',
      boxShadow: '0px 10px 16px rgba(0, 0, 0, 0.04)',
      padding: '2rem',
    }}>
      <Box sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
      }}>
        <h1 className='registerTitle'>Cadastre um novo contato</h1>
        <h2 className='registerSubTitle'>Preencha as informações para cadastrar um novo contato</h2>
      </Box>
      <Box component="form" sx={{ width: '100%' }} onSubmit={handleSubmit}>
        <TextField
          margin="normal"
          required
          fullWidth
          id="name"
          label="Nome Completo"
          autoComplete="name"
          autoFocus
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <Box sx={{ 
          display: 'flex',
          width: '100%',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}>
          <TextField
            margin="normal"
            required
            id="email"
            label="Email"
            autoComplete="email"
            sx={{ width: '48%' }}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <TextField
            margin="normal"
            required  
            id="mobile"
            label="Celular"
            autoComplete="phone"
            type="number"
            sx={{ width: '48%' }}
            value={mobile}
            onChange={(e) => setMobile(e.target.value)}
          />
        </Box>
        <LoadingButton
          className='registerBtn'
          type='submit'
          variant='contained'
          loading={loading}
        >
          Cadastrar contato
        </LoadingButton>
      </Box>
      <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
        <Alert onClose={handleClose} severity={snackColor} sx={{ width: '100%' }}>
          {snackMessage}
        </Alert>
      </Snackbar>
    </Box>
  )
}

export default RegisterContact