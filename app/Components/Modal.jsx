"use client"

import * as React from 'react';
import Backdrop from '@mui/material/Backdrop';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import { TextField } from '@mui/material';
import { ArrowBack, ArrowRight, CancelSharp, RadioButtonChecked, ShoppingCart } from '@mui/icons-material';
import Image from 'next/image';

export default function TransitionsModal({ customClass }) {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => {
        setOpen(false);
        setToggleModal(false)
    }
    const [toggleModal, setToggleModal] = React.useState(false)

    const [orderMethod, setOrderMethod] = React.useState(true)

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
                    <div className={`absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] bg-[#fffffff8]  shadow-2xl py-9 ${!toggleModal ? "sm:py-12" : "sm:py-3"} min-w-[95vw] sm:min-w-[730px]`}>
                        <h1 className='lg:text-5xl md:text-4xl text-3xl font-bold w-full text-center'> Try It FREE For 10 Days! </h1>
                        <div className='w-full mt-3 bg-[#FFFFFF] px-6'>
                            <div className='border'>
                                <div className="progress progress-striped active">
                                    <div role="progressbar" className="progress-bar progress-bar-danger w-[50%] h-[18px]" > </div>
                                </div>

                                <div className="flex mb-0 cursor-pointer">
                                    <Divider customClass={!toggleModal && "shadow-lg"} h3="Create Your Account" p="Just The Basics" />
                                    <Divider customClass={toggleModal && "shadow-lg"} h3="Try It Free" p="Start Your Trial" />
                                </div>
                                {!toggleModal ? <>
                                    <ArrowLine customClass="left-[25%]" />
                                    <div className='p-3 bg-[#FFFFFF]'>
                                        <form onSubmit={e => { e.preventDefault(); setToggleModal(true) }}>
                                            {Array("Full Name...", "Email Address...", "Phone Number...").map((val, i) => <LabelTextField key={i} label={val} />)}
                                            <button type='submit' className='w-full h-14 bg-[#04E1E1] text-center mt-3 text-3xl font-extrabold'>Go to Step #2</button>
                                            <p className="w-full text-center text-sm text-gray-400 mt-3"> Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti mollitia est quidem, perferendis vero earum praesentium repellendus iure esse hic eos nesciunt, saepe dolorem cupiditate! </p>
                                        </form>
                                    </div>
                                </> : <>
                                    <ArrowLine customClass="right-[25%]" />
                                    <div className='mt-4 p-3 bg-[#FFFFFF]'>
                                        <p className='text-sm text-gray-400 cursor-pointer w-fit hover:bg-slate-100 rounded-xl p-1' onClick={() => setToggleModal(false)}> <ArrowBack /> Back </p>
                                        <div className="relative overflow-x-auto mt-5 h-[55vh] md:h-[80vh] lg:h-[62vh]" id='offerForm'>
                                            <table className="w-full text-sm text-left">
                                                <thead className="text-sm border-b-2 ">
                                                    <tr>
                                                        <THCmp className="rounded-s-lg w-fit" val="item" />
                                                        <THCmp className="pr-2 sm:pr-0" val="Quantity" />
                                                        <THCmp className="rounded-e-lg" val="amount" />
                                                    </tr>
                                                </thead>
                                                <tbody className='w-fit'>
                                                    <tr className="bg-white dark:bg-gray-800 w-fit">
                                                        <th
                                                            scope="row"
                                                            className="font-medium text-gray-900 w-fit dark:text-white text-lg"
                                                        >
                                                            <RadioButtonChecked fontSize='small' color='primary' /> Toolbelts.AI <span className='text-sm font-extrabold'> 10 Day Free Trial</span>
                                                        </th>
                                                        {Array(1, "Free for 10 days then $497/mo").map((val, i) => <TDCmp className="sm:text-left pl-0 sm:pl-8 text-center" val={val} key={i} />)}
                                                    </tr>
                                                </tbody>
                                            </table>
                                            <div className="flex items-center w-full justify-between text-gray-300 mt-8">
                                                <Line />
                                                <p className='w-fit'>Order Summary</p>
                                                <Line />
                                            </div>
                                            <table className="w-full text-sm text-left mt-4">
                                                <thead className="text-sm border-b-2 ">
                                                    <tr>
                                                        <THCmp className="rounded-s-lg w-fit" val="item" />
                                                        <THCmp className="pr-2 sm:pr-0" val="Quantity" />
                                                        <THCmp className="rounded-e-lg" val="amount" />
                                                    </tr>
                                                </thead>
                                                <tbody className='w-fit border-b-2'>
                                                    <tr className="bg-white dark:bg-gray-800 w-fit">
                                                        <th
                                                            scope="row"
                                                            className="font-normal text-gray-900 w-fit dark:text-white text-lg"
                                                        >
                                                            Toolbelts.AI <span className='text-base'> 10 Day Free Trial</span>
                                                        </th>
                                                        <TDCmp className="sm:text-left pl-0 sm:pl-8 text-center py-3" val="1" />
                                                        <TDCmp className="text-[#1471A8] font-extrabold" val="$ 0.00" />
                                                    </tr>
                                                </tbody>
                                                <tfoot>
                                                    <tr className="font-semibold text-gray-900 dark:text-white">
                                                        <THCmp className="py-2 text-base" val="Order Total" />
                                                        <TDCmp className="py-2" />
                                                        <TDCmp className="text-[#1471A8] font-extrabold" val="$ 0.00" />
                                                    </tr>
                                                </tfoot>
                                            </table>
                                            <div className="flex flex-col sm:flex-row mt-px w-full gap-2 sm:gap-0 sm:justify-between">
                                                <div onClick={() => setOrderMethod(true)} className={`sm:w-[49.5%] h-16 rounded-lg border-2 cursor-pointer ${orderMethod ? "border-[#1471A8]" : "border-gray-300"} flex flex-col justify-center px-2`}>
                                                    {!orderMethod ? <Image alt='cardIcon' width={40} height={40} src='/cardIcon.png' /> : <Image alt='cardIcon' width={40} height={40} src='/cardIconActive.png' />}
                                                    <p className={`${orderMethod ? "text-[#1471A8]" : "text-gray-400"} pl-1 font-semibold text-sm`}>Card</p>
                                                </div>
                                                <div onClick={() => setOrderMethod(false)} className={`sm:w-[49.5%] h-16 rounded-lg border-2 cursor-pointer ${!orderMethod ? "border-[#1471A8]" : "border-gray-300"} flex flex-col justify-center px-2`}>
                                                    {orderMethod ? <Image alt='gPay' width={60} height={10} src='/gPay.png' /> : <Image alt='gPay' width={60} height={10} src='/gPayActive.png' />}
                                                    <p className={`${!orderMethod ? "text-[#1471A8]" : "text-gray-400"} pl-1 font-semibold text-sm`}>Google Pay</p>
                                                </div>
                                            </div>
                                            <div className="mt-2">
                                                <Label id="cardNumber" label="Card number" />
                                                <div className='w-full flex items-center justify-between border-gray-300 border py-3 px-3'>
                                                    <input type="number" className='w-[49%] sm:w-[69%] border-none outline-none' placeholder='1234 1234 1234 1234' maxLength={12} id='cardNumber' />
                                                    <div className='sm:w-[29%] w-[49%] flex items-center justify-end gap-0'>
                                                        {Array('/visa.png', '/card2.png', '/card3.png', '/card4.png').map((src, i) => <Image src={src} key={i} alt={src} width={30} height={60}></Image>)}
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="flex flex-col sm:flex-row w-full gap-2 sm:gap-0 sm:justify-between mt-2">
                                                <InputLable id="expiration" label="Expiration" placeholder="MM / YY" />
                                                <div className='flex flex-col sm:w-[49.5%]'>
                                                    <Label id="CVC" label="CVC" />
                                                    <div className='w-full flex items-center border-gray-300 border p-2'>
                                                        <input type="number" id="CVC" className='w-[85%] border-none outline-none' placeholder='CVC' />
                                                        <Image alt='cvc' src='/cvc.png' className='flex justify-end' height={60} width={30} />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="flex flex-col sm:flex-row w-full justify-between mt-2">
                                                <div className='flex flex-col sm:w-[49.5%]'>
                                                    <Label id="Country" label="Country" />
                                                    <select id='Country' className='w-full border-gray-300 border p-2 outline-none'>
                                                        {Array("United States", "United Kingdom", "Canada", "Iran").map((val, i) => <option value={val} key={i}>{val}</option>)}
                                                    </select>
                                                </div>
                                                <InputLable id="ZIP" label="ZIP" placeholder="12345" />
                                            </div>
                                            <div className="mt-10 flex gap-3 items-start text-sm">
                                                <input type="checkbox" id='checkBox' className='mt-2' />
                                                <label htmlFor='checkBox'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint adipisci repellat aut ipsa asperiores. Eos, sunt quam quas quasi, rem dolores maiores eaque hic optio tenetur facilis maxime autem ad? Neque rem corporis repellat .</label>
                                            </div>
                                            <button className='w-full flex items-center my-2 gap-1 justify-center h-12 rounded-lg text-white bg-[#8A8A8A] text-base'> <ShoppingCart /> Begin Free Trial</button>
                                            <p className='text-xs text-gray-500 text-center'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nostrum aperiam officiis incidunt enim iusto dignissimos nesciunt eaque tempore! Exercitationem modi deserunt nobis delectus reiciendis qui eligendi repudiandae sequi placeat quasi. Illum odit provident, aspernatur, harum qui sit vitae suscipit reprehenderit ad voluptatem alias, corrupti minus quam! Nulla reprehenderit sunt quam, commodi corrupti et provident? Nulla, nostrum. Labore dignissimos reiciendis autem.</p>
                                        </div>


                                    </div>
                                </>
                                }
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

const InputLable = ({ id, label, placeholder }) => (
    <div className='flex flex-col sm:w-[49.5%]'>
        <Label id={id} label={label} />
        <input type="number" id={id} className='w-full border-gray-300 border p-2 outline-none' placeholder={placeholder} />
    </div>
)

const THCmp = ({ className, val }) => (
    <th scope="col" className={className}>
        {val}
    </th>
)

const LabelTextField = ({ label }) => (
    <TextField id="outlined-textarea" label={label} multiline className='w-full mt-[12px!important]' />
)

const ArrowLine = ({ customClass }) => (
    <div className={`w-full bg-[#1471A8] h-2 relative`}>
        <span className={`absolute bottom-[2px] ${customClass} h-3 w-3 rotate-45 bg-[#1471A8] `}></span>
    </div>
)

const Label = ({ label, id }) => (
    <label className='text-gray-500 text-sm' htmlFor={id}>{label}</label>
)

const TDCmp = ({ className, val }) => (
    <td className={className}>{val}</td>
)

const Line = () => (
    <div className='h-[0.5px] w-[25%] sm:w-[38%] bg-gray-300'></div>
)