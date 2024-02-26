import React from 'react'

const page = () => {
    return (
        <div className='max-w-[1600px] flex flex-col justify-center items-center overflow-x-hidden sm:h-screen'>
            <h1 className='text-4xl font-medium mt-3'>Welcome to Toolbelts.ai</h1>
            <p className='text-lg font-semibold text-gray-600 mt-1'>14 Day Trial, only pay when you got results.</p>
            <button className="py-4 px-6 border justify-center flex gap-2 border-slate-200 dark:border-slate-700 rounded-lg text-slate-700 dark:text-slate-200 hover:border-slate-400 dark:hover:border-slate-500 hover:text-slate-900 dark:hover:text-slate-300 hover:shadow transition duration-150 sm:w-[400px] w-[80%] mb-0 mt-14">
                <img
                    className="w-6 h-6"
                    src="https://www.svgrepo.com/show/475656/google-color.svg"
                    loading="lazy"
                    alt="google logo"
                />
                <span>Contine with Google</span>
            </button>
            <div className='flex my-5 items-center gap-4 w-full justify-center'>
                <Line />
                <p className='text-xl font-semibold'>Or</p>
                <Line />
            </div>
            <input className='sm:w-[400px] w-[80%] border-[#4ca4ed] border-2 outline-none p-3 rounded mt-1' placeholder='name@company.com' />
            <button className='bg-[#0073EA] text-white sm:w-[400px] w-[80%] mt-6 py-3 rounded text-xl'>Continue</button>
            <p className='text-base font-semibold text-gray-60 mt-3 text-center'>By proceeding you agree to the <br />  <Span content="Terms of Service" /> and <Span content="Privacy Policy" /> </p>
        </div>
    )
}

export default page

const Line = () => (
    <hr className='border border-gray-300 h-px md:w-72 sm:w-[30%] w-[65px]' />
)

const Span = ({ content }) => (
    <span className='text-[#4ca4ed!important] cursor-pointer font-medium'>{content}</span>
)