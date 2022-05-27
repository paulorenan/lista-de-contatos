import React, {useState, useContext} from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import LoadingButton from '@mui/lab/LoadingButton';
import MyContext from '../context';
import deleteIcon from '../assets/trash.svg';

export default function DeleteDialog({ row, fetchContacts, handleSnack }) {
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const { axios, URL } = useContext(MyContext);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleSubmit = () => {
    setLoading(true);
    axios.delete(`${URL}/contacts/${row.id}`)
      .then(() => {
        fetchContacts();
        handleClose();
        setLoading(false);
        handleSnack('Contato excluído com sucesso!', 'success');
      })
      .catch(() => {
        setLoading(false);
        handleSnack('Erro ao excluir contato!', 'error');
      });
  }

  function telMask(number){
    number= number.replace(/\D/g,"");
    number= number.replace(/^(\d{2})(\d)/g,"($1) $2");
    number= number.replace(/(\d)(\d{4})$/,"$1-$2");
    return number;
  }

  return (
    <>
      <Button variant="text" size="small" sx={{marginLeft: '1rem'}} onClick={handleClickOpen}>
        <img src={deleteIcon} alt="Excluir" />
        <p className='actionBtn'>Excluir</p>
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>{`Excluir ${row.name}`}</DialogTitle>
        <DialogContent>
          <DialogContentText>
            <p>Tem certeza que deseja excluir o seguinte contato:</p>
            <p>Nome: <strong>{row.name}</strong></p>
            <p>Celular: <strong>{telMask(row.mobile)}</strong></p>
            <p>Email: <strong>{row.email}</strong></p>
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <LoadingButton onClick={handleClose} loading={loading}>Cancelar</LoadingButton>
          <LoadingButton onClick={handleSubmit} loading={loading}>Excluir</LoadingButton>
        </DialogActions>
      </Dialog>
    </>
  );
}
