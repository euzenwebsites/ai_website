import Image from 'next/image'
import React from 'react'

const page = () => (
  <div className='max-w-[1600px] flex flex-col justify-center items-center overflow-x-hidden sm:h-screen'>
    <h1 className='text-4xl font-medium mt-3'>Log in to your account</h1>
    <h3 className='mt-8 font-medium text-xl'>Enter your work email address</h3>
    <input className='sm:w-[400px] w-[80%] border-[#4ca4ed] border-2 outline-none p-3 rounded mt-1' placeholder='Example@company.com' />
    <button className='bg-[#0073EA] text-white sm:w-[400px] w-[80%] mt-6 py-3 rounded text-2xl'>Next &nbsp;&nbsp; {'->'}</button>
    <div className='flex my-10 items-center gap-8 w-full justify-center'>
      <Line />
      <p className='text-xl text-gray-600'>Or Sign in With</p>
      <Line />
    </div>
    <button className="py-4 px-6 border flex gap-2 border-slate-200 dark:border-slate-700 rounded-lg text-slate-700 dark:text-slate-200 hover:border-slate-400 dark:hover:border-slate-500 hover:text-slate-900 dark:hover:text-slate-300 hover:shadow transition duration-150 mb-10">
      <Image height={24} width={24}
        className="w-6 h-6"
        src="https://www.svgrepo.com/show/475656/google-color.svg"
        loading="lazy"
        alt="google logo"
      />
      <span>Google</span>
    </button>
    <Para p="Don&apos;t have an account yet?" span="Sign up" />
    <Para p="Can&apos;t log in?" span="Visit our help center" />
  </div>
)

export default page

const Line = () => (
  <hr className='border border-gray-300 h-px md:w-72 sm:w-[30%] w-[65px]' />
)
const Para = ({ p, span }) => (
  <p className='text-lg text-gray-600'>{p} <span className='text-[#4ca4ed!important] cursor-pointer'>{span}</span> </p>
)