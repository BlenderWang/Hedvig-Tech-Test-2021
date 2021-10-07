import * as React from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import MobileStepper from '@mui/material/MobileStepper';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
import CloseIcon from '@mui/icons-material/Close';
import CloseSharpIcon from '@mui/icons-material/CloseSharp';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { v4 as uuidv4 } from 'uuid';

export const Overlay = ({ open, closeOverlay, goBack, toNext, items, activeItem}) => {
    const maxItems = items.length;

    return (
        <>
            <Modal
                open={open}
                onClose={() => closeOverlay()}
                hideBackdrop
            >
                <Box className='overlay-wrapper'>
                    <div className='overlay'>
                        <CloseIcon onClick={() => closeOverlay()} className='overlay-closeBtn' />

                        <Box className='overlay-content'>
                            <MobileStepper
                                steps={maxItems}
                                position="static"
                                activeStep={activeItem}
                                nextButton={
                                    <Button onClick={() => toNext()} disabled={activeItem === maxItems - 1} variant="outlined" color='inherit' id='forwardBtn'>
                                        <ArrowForwardIosIcon />
                                    </Button>
                                }
                                backButton={
                                    <Button onClick={() => goBack()} disabled={activeItem === 0}  variant="outlined" color='inherit' id='backBtn'>
                                        <ArrowBackIosNewIcon />
                                    </Button>
                                }
                                id='button-group'
                            />

                            <div className='overlay-content-group'>
                                <h2 className='overlay-title'>{items[activeItem].title}</h2>
                                <p className='overlay-description'>{items[activeItem].description}</p>
                                <Divider variant="middle" id='overlay-divider' />
                                <Box className='overlay-covered--group'>
                                    {items[activeItem].covered.map(i => (
                                        <div key={uuidv4()} className='overlay-covered--item'>
                                            <CloseSharpIcon id='icon-plus' />
                                            <p>{i}</p>
                                        </div>
                                    ))}
                                </Box>
                            </div>
                        </Box>
                    </div>
                </Box>
            </Modal>
        </>
    )
}
