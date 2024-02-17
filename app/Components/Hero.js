"use client"
import React, { useState } from "react";
import Image from "next/image";
import Cookie from "./Cookie";

const Hero = () => {
    const [placeholder, setPlaceholder] = useState('')
    const [placeholder1, setPlaceholder1] = useState('')
    const [placeholder2, setPlaceholder2] = useState('')
    const [placeholder3, setPlaceholder3] = useState('')
    const [condition, setCondition] = useState(true)
    const [condition1, setCondition1] = useState(true)
    const [condition2, setCondition2] = useState(true)
    const [condition3, setCondition3] = useState(true)
    const [condition4, setCondition4] = useState(true)
    const [condition5, setCondition5] = useState(true)
    const [condition6, setCondition6] = useState(true)
    const [condition7, setCondition7] = useState(true)
    const [multiple, setMultiple] = useState(false)
    let [ImageArr, setImageArr] = useState([]);

    const toggleConditon = (src, func) => {
        if (src !== placeholder && src !== placeholder1 && src !== placeholder2 && src !== placeholder3) {
            if (placeholder === '') {
                setImageArr([...ImageArr, src])
                setPlaceholder(src)
                return
            } else if (placeholder1 === '') {
                setImageArr([...ImageArr, src])
                setPlaceholder1(src)
                return
            } else if (placeholder2 === '') {
                setImageArr([...ImageArr, src])
                setPlaceholder2(src)
                return
            } else if (placeholder3 === '') {
                setImageArr([...ImageArr, src])
                setPlaceholder3(src)
                return
            } else {
                if (ImageArr.length === 4) {
                    setMultiple(true)
                    return
                }
                return
            }
        } else if (placeholder == '' && placeholder1 == '' && placeholder3 == '' && placeholder2 == '') {
            return

        } else {
            if (src === '/contact.png') {
                setCondition(true)
                return
            } else if (src === '/omni.png') {
                setCondition1(true)
                return
            } else if (src === '/scheduling.png') {
                setCondition2(true)
                return
            } else if (src === '/chatbots.png') {
                setCondition3(true)
                return
            } else if (src === '/signature.png') {
                setCondition4(true)
                return
            } else if (src === '/secure.png') {
                setCondition5(true)
                return
            } else if (src === '/learning.png') {
                setCondition6(true)
                return
            } else if (src === '/private.png') {
                setCondition7(true)
                return
            }
            return
        }
    }
    return (
        <section className="flex flex-col items-center px-9 z-0 mt-20 ">
            <div className="relative bg-gray-50">
                <div className="h-56 w-[970px] absolute bottom-[135px] right-[61px]">
                    <div className="flex justify-center items-center h-full w-full flex-col">
                        <h1 className="text-black text-5xl font-bold text-center"> <span className="text-[#03E2E1]">Every</span> <span className="font-normal">Tool </span>your business <span className="text-[#03E2E1]">Needs</span>,  </h1>
                        <h1 className="text-[#03E2E1] pt-3 text-6xl font-bold text-center">In-One-Place<span className="text-[black!important]">...</span> </h1>
                    </div>
                </div>
                <Image src={'/ring.png'} className="h-[90%] w-[1100px]" width={1100} height={950} />
                {!multiple && (
                    <>
                        <div className={`bg-[#d3dfe0] glow w-[140px] h-[140px] p-2 ${placeholder !== "" ? "cursor-pointer" : 'cursor-auto'} rounded-full h-36 w-36 absolute bottom-14 left-16 `}>
                            <div className="flex justify-center items-center w-full h-full">
                                <img src={placeholder} height={140} width={140} className=" opacity-55" onClick={() => {
                                    toggleConditon(placeholder);
                                    setPlaceholder('');
                                    setImageArr(ImageArr.filter(val => val !== placeholder))
                                }} />
                            </div>
                        </div>
                        <div className={`bg-[#d3dfe0] w-[140px] h-[140px] p-2 ${placeholder1 !== "" ? "cursor-pointer" : 'cursor-auto'} rounded-full h-36 w-36 absolute bottom-4 left-52`}>
                            <div className="flex justify-center items-center w-full h-full">
                                <img src={placeholder1} height={140} width={140} className=" opacity-55" onClick={() => {
                                    toggleConditon(placeholder1);
                                    setPlaceholder1('');
                                    setImageArr(ImageArr.filter(val => val !== placeholder1))
                                }} />
                            </div>
                        </div>
                        <div className={`bg-[#d3dfe0] w-[140px] h-[140px] p-2 ${placeholder2 !== "" ? "cursor-pointer" : 'cursor-auto'} rounded-full h-36 w-36 absolute bottom-14 right-24`}>
                            <div className="flex justify-center items-center w-full h-full">
                                <img src={placeholder2} height={140} width={140} className=" opacity-55" onClick={() => {
                                    toggleConditon(placeholder2);
                                    setPlaceholder2('');
                                    setImageArr(ImageArr.filter(val => val !== placeholder2))
                                }} />
                            </div>
                        </div>
                        <div className={`bg-[#d3dfe0] w-[140px] h-[140px] p-2 ${placeholder3 !== "" ? "cursor-pointer" : 'cursor-auto'} rounded-full h-36 w-36 absolute bottom-3 right-64`}>
                            <div className="flex justify-center items-center w-full h-full">
                                <img src={placeholder3} height={140} width={140} className=" opacity-55" onClick={() => {
                                    toggleConditon(placeholder3);
                                    setPlaceholder3('');
                                    setImageArr(ImageArr.filter(val => val !== placeholder3))
                                }} />
                            </div>
                        </div>
                    </>
                )}
                {console.log(multiple)}
                <div className={`bgBanner bg-[#d3dfe0] rounded ${multiple && 'h-36 w-[300px!important] right-[420px!important]'} h-36 w-48 absolute bottom-2 right-[455px] transition-all`}>
                    <div className="flex flex-wrap h-full w-full ">
                        {multiple && ImageArr.map((val, i) => (
                            <div key={i} className="h-[50%] w-[50%] hidden">
                                <img src={val} className="h-full w-full object-contain" />
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <div className="mt-10 flex flex-col justify-center items-center">
                <h1 className="text-2xl font-semibold">How would you like to grow your business?</h1>
                <div className='w-[100%] flex gap-10 justify-center items-start'>
                    {condition && (
                        <div className={`flex justify-center cursor-pointer items-center flex-col w-[120px] `}>
                            <div className='rounded-full bg-[#d3dfe0] glow1 transition-all duration-200'>
                                <Image width={90} height={90} src={'/contact.png'} className="w-[94px] p-2  transition-all duration-200" onClick={() => {
                                    toggleConditon('/contact.png', setCondition);
                                    if (ImageArr.length !== 4) {
                                        setCondition(false)
                                        return
                                    }
                                }} />
                            </div>
                            <p className="text-center">Contact Management</p>
                        </div>
                    )}
                    {condition1 && (
                        <div className={`flex justify-center cursor-pointer items-center flex-col w-[120px] `}>
                            <div className='rounded-full bg-[#d3dfe0] glow1 transition-all duration-200'>
                                <Image src={'/omni.png'} width={90} height={90} className="w-[94px] p-2  transition-all duration-200" onClick={() => {
                                    toggleConditon('/omni.png', setCondition1);
                                    if (ImageArr.length !== 4) {
                                        setCondition1(false)
                                        return
                                    }
                                }} />
                            </div>
                            <p className="text-center">Omni-Channel AdManagement</p>
                        </div>
                    )}
                    {condition2 && (
                        <div className="flex justify-center cursor-pointer items-center flex-col w-[120px]">
                            <div className='rounded-full bg-[#d3dfe0] hover:bg-[#03E2E1] transition-all duration-200'>
                                <Image src={'/scheduling.png'} width={90} height={90} className="w-[94px] p-2 hover:scale-150 transition-all duration-200" onClick={() => {
                                    toggleConditon('/scheduling.png', setCondition2);
                                    if (ImageArr.length !== 4) {
                                        setCondition2(false)
                                        return
                                    }
                                }} />
                            </div>
                            <p className="text-center">e-Scheduling & Custom Links</p>
                        </div>
                    )}
                    {condition3 && (
                        <div className="flex justify-center cursor-pointer items-center flex-col w-[120px]">
                            <div className='rounded-full bg-[#d3dfe0] hover:bg-[#03E2E1] transition-all duration-200'>
                                <Image src={'/chatbots.png'} width={90} height={90} className="w-[94px] p-2 hover:scale-150 transition-all duration-200" onClick={() => {
                                    toggleConditon('/chatbots.png', setCondition3);
                                    if (ImageArr.length !== 4) {
                                        setCondition3(false)
                                        return
                                    }
                                }} />
                            </div>

                            <p className="text-center">Advanced A.I. Chat Bots</p>
                        </div>
                    )}
                    {condition4 && (
                        <div className="flex justify-center cursor-pointer items-center flex-col w-[120px]">
                            <div className='rounded-full bg-[#d3dfe0] hover:bg-[#03E2E1] transition-all duration-200'>
                                <Image src={'/signature.png'} width={90} height={90} className="w-[94px] p-2 hover:scale-150 transition-all duration-200" onClick={() => {
                                    toggleConditon('/signature.png', setCondition4);
                                    if (ImageArr.length !== 4) {
                                        setCondition4(false)
                                        return
                                    }
                                }} />
                            </div>
                            <p className="text-center">e-signature & Fillings</p>
                        </div>
                    )}
                    {condition5 && (
                        <div className="flex justify-center cursor-pointer items-center flex-col w-[120px]">
                            <div className='rounded-full bg-[#d3dfe0] hover:bg-[#03E2E1] transition-all duration-200'>
                                <Image src={'/secure.png'} width={90} height={90} className="w-[94px] p-2 hover:scale-150 transition-all duration-200" onClick={() => {
                                    toggleConditon('/secure.png', setCondition5);
                                    if (ImageArr.length !== 4) {
                                        setCondition5(false)
                                        return
                                    }
                                }} />
                            </div>
                            <p className="text-center">Secure Payment Links</p>
                        </div>
                    )}
                    {condition6 && (
                        <div className="flex justify-center cursor-pointer items-center flex-col w-[120px]">
                            <div className='rounded-full bg-[#d3dfe0] hover:bg-[#03E2E1] transition-all duration-200'>
                                <Image src={'/learning.png'} width={90} height={90} className="w-[94px] p-2 hover:scale-150 transition-all duration-200" onClick={() => {
                                    toggleConditon('/learning.png', setCondition6);
                                    if (ImageArr.length !== 4) {
                                        setCondition6(false)
                                        return
                                    }
                                }} />
                            </div>
                            <p className="text-center">Learning Management Systems</p>
                        </div>
                    )}
                    {condition7 && (
                        <div className="flex justify-center cursor-pointer items-center flex-col w-[120px]">
                            <div className='rounded-full bg-[#d3dfe0] hover:bg-[#03E2E1] transition-all duration-200'>
                                <Image src={'/private.png'} width={90} height={90} className="w-[94px] p-2 hover:scale-150 transition-all duration-200" onClick={() => {
                                    toggleConditon('/private.png', setCondition7);
                                    if (ImageArr.length !== 4) {
                                        setCondition7(false)
                                        return
                                    }
                                }} />
                            </div>
                            <p className="text-center">Private Communities</p>
                        </div>
                    )}
                </div>
                <button className="text-white px-8 py-3 rounded-3xl bg-[#03E2E1] hover:bg-[#61b4b4]">Get Started {'->'}</button>
                <h3 className="mt-2 font-semibold">14 Day Free Trial Plans Starting at $97/Months</h3>
            </div>

        </section>
    );
};

export default Hero;