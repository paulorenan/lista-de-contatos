import React, {useContext} from 'react'
import { Box } from '@mui/material';
import Header from '../components/Header'
import MyContext from '../context'
import ContactsList from '../components/ContactsList';

function Contacts() {
  const {handleLogout} = useContext(MyContext);
  return (
    <Box sx={{
      minHeight: '100vh',
      backgroundColor: '#F7F8FC',
      display: 'flex',
      flexDirection: 'column',
    }}>
      <Header voltar={handleLogout} />
      <ContactsList />
    </Box>
  )
}

export default Contacts