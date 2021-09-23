import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import MuiDialogContent from '@material-ui/core/DialogContent';
import MuiDialogActions from '@material-ui/core/DialogActions';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import Typography from '@material-ui/core/Typography';

const styles = (theme) => ({
  root: {
    margin: 0,
    padding: theme.spacing(2),
  },
  closeButton: {
    position: 'absolute',
    right: theme.spacing(1),
    top: theme.spacing(1),
    color: theme.palette.grey[500],
    
  },
});



const DialogContent = withStyles((theme) => ({
  root: {
    padding: theme.spacing(1),
    height: "60vh",
    width: "50vw",
    
  },
}))(MuiDialogContent);



export default function CustomizedDialogs({children}) {
  const [open, setOpen] = React.useState(true);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
    
      <Dialog  aria-labelledby="customized-dialog-title" open={open}>
     
        <DialogContent dividers>
            {children}
        </DialogContent>
  
      </Dialog>
    </div>
  );
}
