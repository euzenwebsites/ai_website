"use client"

import React, { useEffect, useState } from 'react'
import Image from 'next/image'
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
            email: '',
            password: '',
        },
        validationSchema: Yup.object({
            company_name: Yup.string().required('Company Name is required'),
            email: Yup.string().email('Invalid email address').required('An email address is required'),
            password: Yup.string().required().min(6, 'Your password has to be at least 6 characters long'),
        }),
        onSubmit: async (values, { resetForm }) => {
            const { company_name, email, password } = values
            console.log(company_name, email, password);
            setLoading(true)
            try {
                const objToSend = {
                    company_name,
                    email,
                    password,
                }
                const response = await axios.post('/signup', objToSend)
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
                    <h1 className='text-4xl font-medium mt-3'>Welcome to Toolbelts.ai</h1>
                    <p className='text-lg font-semibold text-gray-600 mt-1'>14 Day Trial, only pay when you got results.</p>
                    <GoogleSignInButton />
                    <div className='flex my-5 items-center gap-4 w-full justify-center'>
                        <Line />
                        <p className='text-xl font-semibold'>Or</p>
                        <Line />
                    </div>
                    <form onSubmit={formik.handleSubmit} className='w-full flex flex-col items-center'>

                        <input {...formik.getFieldProps('email')} type='email' className='sm:w-[400px] w-[80%] border-[#4ca4ed] border-2 outline-none p-3 rounded mt-1' placeholder='Email' />
                        {formik.touched.email && formik.errors.email && (
                            <p className="text-red-500 text-xs mt-1">{formik.errors.email}</p>
                        )}

                        <input {...formik.getFieldProps('password')} type='password' className='sm:w-[400px] w-[80%] border-[#4ca4ed] border-2 outline-none p-3 rounded mt-4' placeholder='Password' />
                        {formik.touched.password && formik.errors.password && (
                            <p className="text-red-500 text-xs mt-1">{formik.errors.password}</p>
                        )}

                        <input {...formik.getFieldProps('company_name')} className='sm:w-[400px] w-[80%] border-[#4ca4ed] border-2 outline-none p-3 rounded mt-4' placeholder='name@company.com' />
                        {formik.touched.company_name && formik.errors.company_name && (
                            <p className="text-red-500 text-xs mt-1">{formik.errors.company_name}</p>
                        )}

                        {loading ? <Loader /> : <button type='submit' className='bg-[#0073EA] text-white sm:w-[400px] w-[80%] mt-6 py-3 rounded text-xl'>Continue</button>}

                    </form>
                    <p className='text-base font-semibold text-gray-60 mt-3 text-center'>By proceeding you agree to the <br />  <Link href={'/termsOfUse'}> <Span content="Terms of Service" /> </Link> and <Link href={"/privacyPolicy"}> <Span content="Privacy Policy" /> </Link> </p>
                </div>
            }
        </>
    )
}

export default Form

const Line = () => (
    <hr className='border border-gray-300 h-px md:w-72 sm:w-[30%] w-[65px]' />
)

const Span = ({ content }) => (
    <span className='text-[#4ca4ed!important] cursor-pointer font-medium'>{content}</span>
)