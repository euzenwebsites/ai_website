import Image from 'next/image'
import React from 'react'

const Footer = () => (
    <div className='bg-black pt-8 mt-10 text-stone-400 text-base font-medium w-screen'>
        <div className='flex justify-around items-center'>
            <p className=''>Copyright <span className='text-lg text-white bg-[rgb(255,255,255,0.1)] font-semibold'>Toolbelts.AI LLC</span> </p>
            <div className='w-[30vw] bg-[rgb(255,255,255,0.1)] h-5'></div>
        </div>

        <div className='mt-8 px-5 flex justify-between items-center'>
            <Image width={60} height={60} src="/footerimg.png" alt="" />
            <p>Privacy And California Privacy Rights</p>
            <p>Cookie Policy</p>
            <p>Terms Of Use</p>
            <p>Disclaimer</p>
            <Image width={60} height={60} src="/footerimg1.png" alt="" />
        </div>

    </div>
)

export default Footer
