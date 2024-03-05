"use client"

import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import axios from '../../axios'
import { useFormik } from 'formik'
import * as Yup from 'yup';
import { toast } from 'react-toastify';
import Loader from '../Loader'
import { useRouter } from 'next/navigation'
import GoogleSignInButton from '../GoogleSignInButton'

const Form = () => {
    const [isAuthenticated, setIsAuthenticated] = useState(true);
    const router = useRouter()
    useEffect(() => {
        if (localStorage.getItem('user')) {
            setIsAuthenticated(false)
            router.push('/')
        }
    }, [router])
    const [loading, setLoading] = useState(false)
    const formik = useFormik({
        initialValues: {
            company_name: '',
            password: '',
        },
        validationSchema: Yup.object({
            company_name: Yup.string().required('Company Name is required'),
            password: Yup.string().required().min(6, 'Your password has to be at least 6 characters long'),
        }),
        onSubmit: async (values, { resetForm }) => {
            const { company_name, password } = values
            setLoading(true)
            try {
                const objToSend = {
                    company_name,
                    password,
                }
                const response = await axios.post('/login', objToSend)
                resetForm()

                if (response?.data?.status) {
                    toast.success(response?.data?.message, {
                        position: "top-right",
                        autoClose: 5000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                        theme: "light",
                    });
                    localStorage.setItem('user', JSON.stringify(response.data.data))
                    localStorage.setItem('token', response.data.token)
                    setLoading(false)
                    router.push('/')
                } else {
                    toast.error(response.data.message, {
                        position: "top-right",
                        autoClose: 5000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                        theme: "light",
                    });
                    setLoading(false)
                }


            } catch (error) {
                toast.error(error.message, {
                    position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                });
                setLoading(false)
            }
        }
    });
    return (
        <>
            {isAuthenticated &&
                <div className='max-w-[1600px] flex flex-col justify-center items-center overflow-x-hidden sm:h-screen'>
                    <h1 className='text-4xl font-medium mt-3'>Log in to your account</h1>
                    <h3 className='mt-8 font-medium text-xl'>Enter your work email address</h3>
                    <form onSubmit={formik.handleSubmit} className='w-full flex flex-col items-center'>
                        <input {...formik.getFieldProps('company_name')} className='sm:w-[400px] w-[80%] border-[#4ca4ed] border-2 outline-none p-3 rounded mt-1' placeholder='Example@company.com' />
                        <input {...formik.getFieldProps('password')} type='password' className='sm:w-[400px] w-[80%] border-[#4ca4ed] border-2 outline-none p-3 rounded mt-4' placeholder='Password' />
                        {loading ? <Loader /> : <button type='submit' className='bg-[#0073EA] text-white sm:w-[400px] w-[80%] mt-6 py-3 rounded text-2xl'>Next &nbsp;&nbsp; {'->'}</button>}
                    </form>
                    <div className='flex my-10 items-center gap-8 w-full justify-center'>
                        <Line />
                        <p className='text-xl text-gray-600'>Or Sign in With</p>
                        <Line />
                    </div>
                    <GoogleSignInButton />
                    {/* <button className="py-4 px-6 border flex gap-2 border-slate-200 dark:border-slate-700 rounded-lg text-slate-700 dark:text-slate-200 hover:border-slate-400 dark:hover:border-slate-500 hover:text-slate-900 dark:hover:text-slate-300 hover:shadow transition duration-150 mb-10">
                        <Image height={24} width={24}
                            className="w-6 h-6"
                            src="https://www.svgrepo.com/show/475656/google-color.svg"
                            loading="lazy"
                            alt="google logo"
                        />
                        <span>Google</span>
                    </button> */}
                    <p className='text-lg text-gray-600'>Don&apos;t have an account yet? <Link href={'/signup'}>
                        <span className='text-[#4ca4ed!important] cursor-pointer'>Sign up</span> </Link> </p>
                    <Para p="Can&apos;t log in?" span="Visit our help center" />
                </div>
            }
        </>
    )
}

export default Form

const Line = () => (
    <hr className='border border-gray-300 h-px md:w-72 sm:w-[30%] w-[65px]' />
)
const Para = ({ p, span }) => (
    <p className='text-lg text-gray-600'>{p} <span className='text-[#4ca4ed!important] cursor-pointer'>{span}</span> </p>
)