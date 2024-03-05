import Image from 'next/image'
import React from 'react'

const ChatFixed = () => (
    <div className='fixed bottom-11 right-0 cursor-pointer bg-green-300'>
        <img src='/chatFixed.png' /* height={66} width={77} */ className='cursor-pointer scale-[5.5] bg-red-400 h-[500px!important] w-[500px!important]' />
    </div>
)

export default ChatFixed
