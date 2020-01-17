import React from 'react';
import { useDispatch } from 'react-redux';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { Delete } from '@material-ui/icons';

import { removePessoaRequest } from '../../store/modules/pessoa/actions';

export default function ExcluiPessoa(pssId) {
  const [open, setOpen] = React.useState(false);

  const id = pssId.pssId;

  const dispatch = useDispatch();

  function handleRemove() {
    dispatch(removePessoaRequest(id));
    setOpen(false);
  }
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <button
        type="button"
        size="small"
        aria-label="delete"
        onClick={() => handleClickOpen()}
      >
        <Delete size="small" />
      </button>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          Tem certeza que deseja excluir este item?
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Essa ação não poderá ser revertida.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancelar
          </Button>
          <Button onClick={handleRemove} color="primary" autoFocus>
            Confirmar
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
}
