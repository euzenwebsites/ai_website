import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Footer = () => (
    <div className='bg-black pt-8 mt-10 text-stone-400 text-base font-medium w-full overflow-x-hidden md:px-[100px] sm:px-[40px] px-[10px] 2xl:px-[250px]'>

        <div className='flex sm:justify-around flex-col sm:flex-row items-center overflow-x-hidden'>
            <p className=''>Copyright <span className='text-lg text-white bg-[rgb(255,255,255,0.1)] font-semibold'>Toolbelts.AI LLC</span> </p>
            <div className='sm:w-[30vw] w-[70vw] bg-[rgb(255,255,255,0.1)] h-5'></div>
        </div>

        <div className='mt-8 flex sm:justify-between flex-col sm:flex-row items-center gap-8 sm:gap-0 overflow-x-hidden'>
            <Image width={60} height={60} src="/footerimg.png" alt="" />
            <Link href="/privacyPolicy">
                <p>Privacy And California Privacy Rights</p>
            </Link>
            <p>Cookie Policy</p>
            <Link href="/termsOfUse">
                <p>Terms Of Use</p>
            </Link>
            <Link href="/disclaimer">
                <p>Disclaimer</p>
            </Link>
            <Image width={60} height={60} src="/footerimg1.png" alt="" />
        </div>

    </div>
)

export default Footer
