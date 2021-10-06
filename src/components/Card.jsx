import * as React from 'react';
import Box from '@mui/material/Box';
import Backdrop from '@mui/material/Backdrop';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
import CloseIcon from '@mui/icons-material/Close';
import CloseSharpIcon from '@mui/icons-material/CloseSharp';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { v4 as uuidv4 } from 'uuid';

export const Card = ({ item }) => {
    const [open, setOpen] = React.useState(false);

    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const [activeGridItem, setActiveGridItem] = React.useState(0)
    const handleNext = () => {
        setActiveGridItem(previousActive => previousActive + 1)
    }
    const handleBack = () => {
        setActiveGridItem(previousActive => previousActive - 1)
    }

    return (
        <>
            <button key={uuidv4()} name='card-button' className='card' onClick={handleOpen}>
                <div className='card--icon'>
                    <img src={item.icon.variants.light.svgUrl} alt={item.title} />
                </div>
                <h4 className='card--title'>{item.title}</h4>
            </button>

            <Modal
                open={open}
                onClose={handleClose}
                closeAfterTransition
                BackdropComponent={Backdrop}
                BackdropProps={{
                  timeout: 500,
                }}
            >
                <Fade in={open}>
                    <Box className='overlay-wrapper'>
                        <div className='overlay'>
                            <CloseIcon onClick={handleClose} className='overlay-closeBtn' />

                            <Box className='overlay-content' activeGridItem={activeGridItem}>
                                <div className='overlay-header-group'>
                                    <Button onClick={handleBack} variant="outlined" color='inherit' id='backBtn'>
                                        <ArrowBackIosNewIcon />
                                    </Button>
                                    <h2 className='overlay-header'>{item.title}</h2>
                                    <Button onClick={handleNext} variant="outlined" color='inherit' id='forwardBtn'>
                                        <ArrowForwardIosIcon />
                                    </Button>
                                </div>

                                <p className='overlay-description'>{item.description}</p>
                                <Divider variant="middle" id='overlay-divider' />
                                <Box className='overlay-covered--group'>
                                    {item.covered.map(i => (
                                        <div key={uuidv4()} className='overlay-covered--item'>
                                            <CloseSharpIcon id='icon-plus' />
                                            <p>{i}</p>
                                        </div>
                                    ))}
                                </Box>
                            </Box>
                        </div>
                    </Box>
                </Fade>
            </Modal>
        </>
    )
}
