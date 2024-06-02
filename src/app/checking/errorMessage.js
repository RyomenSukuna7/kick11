"use client"
import { LoginLink, RegisterLink } from '@kinde-oss/kinde-auth-nextjs';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { useState } from 'react';

export default function ErrorMessage() {
    const [open, setOpen] = useState(true); 
  
    return (
      <>
        <Dialog
          open={open}
          keepMounted
          aria-describedby="alert-dialog-slide-description"
        >
          <DialogTitle>{"Please go on sign in or login page"}</DialogTitle>
          <DialogContent>
            <DialogContentText id="alert-dialog-slide-description">
              You are not sign in or login for Thread symphony site
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button variant='contained'><RegisterLink style={{textDecoration:"none",color:"black"}}>Sign in</RegisterLink></Button>
            <Button variant='contained'><LoginLink style={{textDecoration:"none",color:"black"}}>Login</LoginLink></Button>
          </DialogActions>
        </Dialog>
      </>
    );
  }