import Image from 'next/image'
import React from 'react'
import TryFree from './ui/TryFree'

const HeroAlternative = () => {
  return (
    <div className='lg:hidden flex flex-col items-center mt-20 md:px-[100px] sm:px-[40px] px-[20px] w-full'>
      <Image width={200} height={90} src="/logo.png" alt="logo" />
      <h1 className='text-4xl font-bold text-center mb-5'>Our A.I. Powered Chatbots And Pre-Built Automated Email Campaigns Will <span className='text-[#FF1717] italic'> Bring You Sales Or You Don't Pay. </span></h1>
      <p>10 Day Free Trial • Then $499/Month • Cancel Any Time</p>
      <TryFree customClass='my-5' />
      <p className='text-center'>You Can Easily Click-To-Cancel From Within The Software. Simply Go To "Settings", then "Billing", then "Modify Subscription."</p>
      <div className='my-5'>
        <h1 className='text-3xl font-bold text-center'>Three Simple Steps To Seeing More Sales:</h1>
        <div className='flex sm:flex-row flex-col sm:justify-between items-center sm:items-start justify-center my-12'>
          <RoundedNoAndP no={1} p="Import your leads, customers, or prospects into RainMakerAI by pressing a button." />
          <RoundedNoAndP no={2} p="Choose one of our pre-built, fully automated email campaigns. Edit the pre-written templates by adding your details or by using our A.I. email writer." />
          <RoundedNoAndP no={3} p={`Press "go" and see the results. It's literally that easy. If it doesn't make sales, you don't pay.`} />
        </div>
        <h1 className='text-3xl font-bold text-center'>You Can Also Get New Leads And Make Sales Faster With Our A.I. Powered Chatbots!</h1>
      </div>
    </div>
  )
}

export default HeroAlternative

const RoundedNoAndP = ({ no, p }) => (
  <>
    <span className='rounded-full sm:h-16 h-20 sm:w-16 w-20 bg-black flex items-center text-white justify-center text-3xl mt-3 sm:mt-0'>{no}</span>
    <p className='text-sm sm:w-[20%]'><span className='font-bold'>Step {no}:</span> {p}</p>
  </>
)