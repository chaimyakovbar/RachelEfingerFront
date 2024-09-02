import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';
import { Link } from 'react-router-dom';


const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});

const DialogForImage = ({ open, onClose, product }) => {
    return (
        <Dialog
            open={open}
            TransitionComponent={Transition}
            keepMounted
            onClose={onClose}
            aria-describedby="alert-dialog-slide-description"
        >
            <DialogTitle>{product.name}</DialogTitle>
            <DialogContent>
                <img src={product.image} alt={product.name} style={{ width: '100%' }} />
            </DialogContent>
            <DialogActions>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", width: "100%" }}>
                    <Button onClick={onClose}>Close</Button>

                    <Link
                        style={{ marginTop: "20px", textDecoration: 'none', fontSize: '16px', padding: '10px 20px', backgroundColor: 'white', color: "black", borderRadius: '5px'}}
                        to={'/contact'}>
                        <Button onClick={onClose}>Contact Us</Button>
                    </Link>
                </div>

            </DialogActions>
        </Dialog>
    );
};

export default DialogForImage;
