import React from 'react'
import Image from 'next/image'
import { useSearchParams } from 'next/navigation'
import { signIn } from 'next-auth/react'

const GoogleSignInButton = () => {
    const searchParams = useSearchParams()
    const callbackUrl = searchParams.get('callbackUrl')
    return (
        <button  onClick={() => signIn('google', { callbackUrl })} className="py-4 px-6 border justify-center flex gap-2 border-slate-200 dark:border-slate-700 rounded-lg text-slate-700 dark:text-slate-200 hover:border-slate-400 dark:hover:border-slate-500 hover:text-slate-900 dark:hover:text-slate-300 hover:shadow transition duration-150 sm:w-[400px] w-[80%] mb-0 mt-14">
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