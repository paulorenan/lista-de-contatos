import React, {useState, useContext} from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import LoadingButton from '@mui/lab/LoadingButton';
import editIcon from '../assets/edit.svg';
import MyContext from '../context';

export default function EditDialog({row, fetchContacts, handleSnack}) {
  const [open, setOpen] = useState(false);
  const [name, setName] = useState(row.name);
  const [mobile, setMobile] = useState(row.mobile);
  const [email, setEmail] = useState(row.email);
  const [loading, setLoading] = useState(false);
  const {axios, URL} = useContext(MyContext);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleSubmit = () => {
    setLoading(true);
    axios.put(`${URL}/contacts/${row.id}`, {
      name,
      mobile,
      email,
    })
      .then(() => {
        fetchContacts();
        handleClose();
        setLoading(false);
        handleSnack('Contato editado com sucesso!', 'success');
      })
      .catch(() => {
        setLoading(false);
        handleSnack('Erro ao editar contato!', 'error');
      });
  }

  return (
    <>
      <Button variant="text" size="small" onClick={handleClickOpen}>
        <img src={editIcon} alt="Editar" />
        <p className='actionBtn'>Editar</p>
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>{`Editar ${row.name}`}</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            label="Nome"
            fullWidth
            variant="standard"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <TextField
            margin="dense"
            label="Celular"
            fullWidth
            variant="standard"
            type="number"
            value={mobile}
            onChange={(e) => setMobile(e.target.value)}
          />
          <TextField
            margin="dense"
            label="Email"
            fullWidth
            variant="standard"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </DialogContent>
        <DialogActions>
          <LoadingButton onClick={handleClose} loading={loading}>Cancelar</LoadingButton>
          <LoadingButton onClick={handleSubmit} loading={loading}>Editar</LoadingButton>
        </DialogActions>
      </Dialog>
    </>
  );
}
