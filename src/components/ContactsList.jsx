import React from 'react'
import { useNavigate } from 'react-router-dom';
import { Box, Button } from '@mui/material';
import ContactsTable from './ContactsTable';
import '../styles/Contacts.css';

function ContactsList() {
  const navigate = useNavigate();

  return (
    <Box sx={{
      alignSelf: 'center',
      marginTop: '2rem',
      marginBottom: '2rem',
      width: '90%',
      borderRadius: '8px',
      backgroundColor: '#FFFFFF',
      boxShadow: '0px 10px 16px rgba(0, 0, 0, 0.04)',
      padding: '2rem',
    }}>
      <div className='contactsList'>
        <p className='contactsTitle'>Listagem de contatos</p>
        <Button className='contactsButton' variant='contained' onClick={() => navigate('/register')}>
          Adicionar novo contato
        </Button>
      </div>
      <ContactsTable />
    </Box>
  )
}

export default ContactsList