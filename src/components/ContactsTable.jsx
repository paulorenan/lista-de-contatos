import React, {useState, useEffect, useContext} from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import MyContext from '../context';

export default function BasicTable() {
  const [rows, setRows] = useState([]);
  const {axios, URL} = useContext(MyContext);

  useEffect(() => {
    axios.get(`${URL}/contacts`)
      .then(response => {
        setRows(response.data);
      })
      .catch(error => {
        console.log(error);
      });
  }, [axios, URL]);

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Nome</TableCell>
            <TableCell align="right">Celular</TableCell>
            <TableCell align="right">Email</TableCell>
            <TableCell align="right">Ações</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="right">{row.mobile}</TableCell>
              <TableCell align="right">{row.email}</TableCell>
              <TableCell align="right">{row.carbs}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
