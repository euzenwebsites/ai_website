import Image from 'next/image'
import React from 'react'

const ChatSection = () => {
  return (
    <div className='md:px-[100px] sm:px-[40px] px-[20px] mt-4 flex justify-center items-center flex-col'>
      <h1 className='text-3xl font-bold'>Have Questions? Talk To Our Chatbot!</h1>
      <p className='text-xl'>You Could Have A Live Bot Like This Talking To YOUR Customers In As Little As A Few Minutes From Now!</p>
      <div className='w-[700px] h-96 flex  flex-col rounded border'>
        <div className='w-full h-16 bg-black pl-4 text-gray-300 flex items-center rounded-xl'>
          Your Prospects Will Love This. See For Yourself Here:
        </div>
        <Image width={65} height={65} alt='gpt' src='/gpt.png' className='mt-2' />
        <div className='flex flex-col items-end justify-end w-full'>
          <div className='bg-gray-300 h-8 w-[70%]'></div>
        </div>
      </div>
    </div>
  )
}

export default ChatSection