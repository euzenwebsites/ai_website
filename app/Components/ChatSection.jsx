import Image from 'next/image'
import React from 'react'
import TryFree from './ui/TryFree';

const ChatSection = () => (
  <div className='md:px-[100px] sm:px-[40px] px-[20px] mt-4 flex justify-center items-center flex-col max-w-[1550px]'>
    <h1 className='text-3xl font-bold'>Have Questions? Talk To Our Chatbot!</h1>
    <p className='text-xl'>You Could Have A Live Bot Like This Talking To YOUR Customers In As Little As A Few Minutes From Now!</p>
    <div className='sm:w-[650px] w-fit h-[550px] flex flex-col rounded border'>
      <div className='w-full h-16 bg-black sm:pl-4 pl-2 text-xs sm:text-base text-gray-300 flex items-center rounded-xl'>
        Your Prospects Will Love This. See For Yourself Here:
      </div>
      <Image width={50} height={50} alt='gpt' src='/gpt.png' className='mt-2' />
      <div className='flex flex-col items-end justify-end w-full'>
        <div className='bg-gray-200 sm:w-[88%] w-[80%] mt-[-24px] sm:mr-6 mr-2 text-xs font-normal sm:px-3 px-1 py-2 rounded-md'>
          {"Please give me your REAL contact info in case I need to send you any additional information when we're done talking. Once you do, you'll be able to talk to our custom A.I."}
        </div>
        <div className='mt-2 flex items-start'>
          <div className='bg-black sm:px-6 px-4 py-4 rounded-lg'>
            <form className='text-white text-sm'>
              <div className='flex flex-col'>
                <label htmlFor="name">Full Name:</label>
                <input type="text" id='name' placeholder='Type here...' className='px-1 py-2 rounded-lg mt-1 text-black' />
              </div>
              <div className='flex flex-col mt-2'>
                <label htmlFor="phone">Phone Number:</label>
                <input type="text" id='phone' placeholder='Type here...' className='px-1 py-2 rounded-lg mt-1 text-black' />
              </div>
              <div className='flex flex-col mt-2'>
                <label htmlFor="email">Email:</label>
                <input type="text" id='email' placeholder='Type here...' className='px-1 py-2 rounded-lg mt-1 text-black' />
              </div>
              <div className='flex justify-end mt-6'>
                <button className='bg-white text-gray-500 w-44 py-2 rounded-lg hover:bg-gray-500 hover:text-white'>Submit</button>
              </div>
            </form>
          </div>
          <Image width={40} height={40} src="/user.png" alt="user" className='object-contain' />
        </div>
      </div>
    </div>
    <TryFree customClass="mt-8" />
  </div>
)

export default ChatSection