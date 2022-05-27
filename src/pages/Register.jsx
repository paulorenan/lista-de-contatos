import React from 'react'
import { useNavigate } from 'react-router-dom';
import { Box } from '@mui/material';
import Header from '../components/Header'
import RegisterContact from '../components/RegisterContact';
import '../styles/Register.css';

function Register() {
  const navigate = useNavigate();

  function returnPage() {
    navigate('/contacts');
  }

  return (
    <Box sx={{
      minHeight: '100vh',
      backgroundColor: '#F7F8FC',
      display: 'flex',
      flexDirection: 'column',
    }}>
      <Header voltar={returnPage} />
      <RegisterContact />
    </Box>
  )
}

export default Register