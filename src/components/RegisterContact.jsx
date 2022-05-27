import React, { useState, useContext } from 'react'
import { Box, TextField } from '@mui/material';
import LoadingButton from '@mui/lab/LoadingButton';
import MyContext from '../context';

function RegisterContact() {
  const [name, setName] = useState('');
  const [mobile, setMobile] = useState('');
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);
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
        .then(response => {
          alert('Contato cadastrado com sucesso');
          setLoading(false);
          setName('');
          setMobile('');
          setEmail('');
        })
        .catch(error => {
          console.log(error);
          setLoading(false);
        });
    }
  }

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
    </Box>
  )
}

export default RegisterContact