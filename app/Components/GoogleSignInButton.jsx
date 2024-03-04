"use client"

import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import { signIn, useSession } from 'next-auth/react'
import axios from '../axios'

const GoogleSignInButton = () => {
    const { data: session, status } = useSession()
    const [userName, setUserName] = useState('')
    const [userEmail, setUserEmail] = useState('')
    useEffect(() => {
        if (status === 'authenticated') {
            setUserName(session?.user?.name)
            setUserEmail(session?.user?.email)
            if (userName !== '') {
                console.log(userName)
                console.log(userEmail)
                axios.post('/googleusers', {
                    email: userEmail,
                    name: userName
                })
            }

        }
    }, [session, status])

    return (
        <button type='submit' onClick={() => signIn('google')} className="py-4 px-6 border justify-center flex gap-2 border-slate-200 dark:border-slate-700 rounded-lg text-slate-700 dark:text-slate-200 hover:border-slate-400 dark:hover:border-slate-500 hover:text-slate-900 dark:hover:text-slate-300 hover:shadow transition duration-150 sm:w-[400px] w-[80%] mb-0 mt-14">
            <Image height={24} width={24}
                className="w-6 h-6"
                src="https://www.svgrepo.com/show/475656/google-color.svg"
                loading="lazy"
                alt="google logo"
            />
            <span>Contine with Google</span>
        </button>
    )
}

export default GoogleSignInButton