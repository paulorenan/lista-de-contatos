import React, {useState, useEffect, useContext} from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import MyContext from '../context';
import { Snackbar, Alert } from '@mui/material';
import EditDialog from './EditDialog';
import DeleteDialog from './DeleteDialog';

export default function BasicTable() {
  const [rows, setRows] = useState([]);
  const [open, setOpen] = useState(false);
  const [snackMessage, setSnackMessage] = useState('');
  const [snackColor, setSnackColor] = useState('');
  const {axios, URL, handleLogout} = useContext(MyContext);

  useEffect(() => {
    axios.get(`${URL}/contacts`)
      .then(response => {
        setRows(response.data);
      })
      .catch(() => {
        handleLogout();
      });
  }, [axios, URL, handleLogout]);

  function fetchContacts() {
    axios.get(`${URL}/contacts`)
      .then(response => {
        setRows(response.data);
      })
      .catch(() => {
        handleLogout();
      });
  }

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setOpen(false);
  };

  function handleSnack(message, color) {
    setSnackMessage(message);
    setSnackColor(color);
    setOpen(true);
  }

  function telMask(number){
    number= number.replace(/\D/g,"");
    number= number.replace(/^(\d{2})(\d)/g,"($1) $2");
    number= number.replace(/(\d)(\d{4})$/,"$1-$2");
    return number;
  }

  const tableHeadStyle = {
    fontFamily: 'Poppins',
    fontStyle: 'normal',
    fontWeight: '700',
    fontSize: '20px',
    lineHeight: '120%',
    letterSpacing:'-0.02em',
    color: '#244677',
  }

  const rowIdStyle = {
    fontFamily: 'Montserrat',
    fontStyle: 'normal',
    fontWeight: 700,
    fontSize: '16px',
    lineHeight: '148%',
    letterSpacing: '-0.02em',
    color: '#244677',
  }

  const rowsStyle = {
    fontFamily: 'Montserrat',
    fontStyle: 'normal',
    fontWeight: 500,
    fontSize: '16px',
    lineHeight: '148%',
    letterSpacing: '-0.02em',
    color: '#495057',
  }

  return (
    <TableContainer component={Paper} sx={{ marginTop: '2rem' }}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell align="center" sx={tableHeadStyle}>#</TableCell>
            <TableCell sx={tableHeadStyle}>Nome</TableCell>
            <TableCell sx={tableHeadStyle}>Celular</TableCell>
            <TableCell sx={tableHeadStyle}>Email</TableCell>
            <TableCell sx={tableHeadStyle}>A????es</TableCell>
          </TableRow>
        </TableHead>
        <TableBody className='tableBody'>
          {rows.map((row) => (
            <TableRow
              key={row.id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell align="center" sx={rowIdStyle} >{row.id}</TableCell>
              <TableCell component="th" scope="row" sx={rowsStyle}>
                {row.name}
              </TableCell>
              <TableCell sx={rowsStyle}>{telMask(row.mobile)}</TableCell>
              <TableCell sx={rowsStyle}>{row.email}</TableCell>
              <TableCell sx={rowsStyle}>
                <EditDialog row={row} fetchContacts={fetchContacts} handleSnack={handleSnack}/>
                <DeleteDialog row={row} fetchContacts={fetchContacts} handleSnack={handleSnack}/>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
        <Alert onClose={handleClose} severity={snackColor} sx={{ width: '100%' }}>
          {snackMessage}
        </Alert>
      </Snackbar>
    </TableContainer>
  );
}
