import React from 'react';
import { Button, AppBar, Toolbar, Container, Typography } from '@mui/material';
import arrowLeft from '../assets/arrow-left.svg';

function Header({voltar}) {
  return (
    <AppBar position="static" sx={{ backgroundColor: '#FFFFFF' }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Button onClick={voltar}>
            <img src={arrowLeft} alt="arrow-left" className='arrow-left' />
            <Typography
            sx={{
              color: '#495057',
              fontSize: '18px',
              fontWeight: '500',
              marginLeft: '1rem',
              lineHeight: '144%',
              fontFamily: 'Montserrat',
            }}
            >
              Voltar
            </Typography>
          </Button>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default Header;
