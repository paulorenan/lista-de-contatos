import React, { useState, useContext } from 'react'
import { Box, Button, TextField } from '@mui/material';
import MyContext from '../context';

function RegisterContact() {
  const [name, setName] = useState('');
  const [mobile, setMobile] = useState('');
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);

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
      <Box component="form" sx={{ width: '100%' }}>
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
        <Button className='registerBtn' variant='contained' color='primary'>
          Cadastrar contato
        </Button>
      </Box>
    </Box>
  )
}

export default RegisterContact