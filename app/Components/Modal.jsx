"use client"

import * as React from 'react';
import Backdrop from '@mui/material/Backdrop';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import { TextField } from '@mui/material';
import { ArrowRight, CancelSharp } from '@mui/icons-material';

export default function TransitionsModal({ customClass }) {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return (
        <div>
            <button onClick={handleOpen} className={`text-black ${customClass} text-2xl rounded-lg font-bold flex items-center py-2 px-3 bg-[#03E2E1] hover:bg-[#3bffff]`}>Try It Free<ArrowRight fontSize="large" /></button>
            <Modal
                aria-labelledby="transition-modal-title"
                aria-describedby="transition-modal-description"
                open={open}
                closeAfterTransition
                slots={{ backdrop: Backdrop }}
                slotProps={{
                    backdrop: {
                        timeout: 500,
                    },
                }}>
                <Fade in={open}>
                    <div className='absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] bg-[#fffffff8]  shadow-2xl py-9 sm:py-12 min-w-[95vw] sm:min-w-[730px]'>
                        <h1 className='lg:text-5xl md:text-4xl text-3xl font-bold w-full text-center'> Try It FREE For 10 Days! </h1>
                        <div className='w-full mt-3 bg-[#FFFFFF] px-6'>
                            <div className='border'>
                                <div className="progress progress-striped active">
                                    <div role="progressbar" className="progress-bar progress-bar-danger w-[50%] h-[18px]" > </div>
                                </div>

                                <div className="flex mb-0 cursor-pointer">
                                    <Divider customClass="shadow-lg" h3="Create Your Account" p="Just The Basics" />
                                    <Divider h3="Try It Free" p="Start Your Trial" />
                                </div>
                                <div className={`w-full bg-[#1471A8] h-2 relative`}>
                                    <span className='absolute bottom-[2px] left-[25%] h-3 w-3 rotate-45 bg-[#1471A8] '></span>
                                </div>
                                <div className='p-3 bg-[#FFFFFF]'>
                                    <form onSubmit={e => e.preventDefault()}>
                                        <TextField id="outlined-textarea" label="Full Name..." multiline className='w-full' />
                                        <TextField id="outlined-textarea" label="Email Address..." multiline className='w-full mt-[12px!important]' />
                                        <TextField id="outlined-textarea" label="Phone Number..." multiline className='w-full mt-[12px!important]' />
                                        <button type='submit' className='w-full h-14 bg-[#04E1E1] text-center mt-3 text-3xl font-extrabold'>Go to Step #2</button>
                                        <p className="w-full text-center text-sm text-gray-400 mt-3"> Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti mollitia est quidem, perferendis vero earum praesentium repellendus iure esse hic eos nesciunt, saepe dolorem cupiditate! </p>
                                    </form>
                                </div>
                            </div>
                        </div>
                        <button className='absolute top-[-5px] right-[-8px]' onClick={handleClose}>
                            <CancelSharp fontSize='large' />
                        </button>
                    </div>
                </Fade>
            </Modal>
        </div>
    );
}

const Divider = ({ h3, p, customClass }) => (
    <div className={` ${customClass} flex-[0.5] py-0`}>
        <h3 className='text-[#1471A8] text-lg font-semibold w-full text-center mb-0 pt-2'>{h3}</h3>
        <p className='text-gray-400 text-sm text-center w-full mt-[-3px]'>{p}</p>
    </div>
)