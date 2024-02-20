"use client"
import React, { useState } from "react";
import Image from "next/image";

const Hero = () => {
    const [placeholder, setPlaceholder] = useState('')
    const [placeholder1, setPlaceholder1] = useState('')
    const [placeholder2, setPlaceholder2] = useState('')
    const [placeholder3, setPlaceholder3] = useState('')
    const [placeholder4, setPlaceholder4] = useState('')
    const [condition, setCondition] = useState(true)
    const [condition1, setCondition1] = useState(true)
    const [condition2, setCondition2] = useState(true)
    const [condition3, setCondition3] = useState(true)
    const [condition4, setCondition4] = useState(true)
    const [condition5, setCondition5] = useState(true)
    const [condition6, setCondition6] = useState(true)
    const [condition7, setCondition7] = useState(true)
    const [isHovered, setIsHovered] = useState(false);
    const [isHovered1, setIsHovered1] = useState(false);
    const [isHovered2, setIsHovered2] = useState(false);
    const [isHovered3, setIsHovered3] = useState(false);
    const [isHovered4, setIsHovered4] = useState(false);
    const [isHovered5, setIsHovered5] = useState(false);
    const [isHovered6, setIsHovered6] = useState(false);
    const [isHovered7, setIsHovered7] = useState(false);
    const [multiple, setMultiple] = useState(false)
    let [ImageArr, setImageArr] = useState([]);

    const toggleConditon = (src, func) => {
        if (src !== placeholder && src !== placeholder1 && src !== placeholder2 && src !== placeholder3 && src !== placeholder4) {
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
            } else if (placeholder4 === '') {
                setImageArr([...ImageArr, src])
                setPlaceholder4(src)
                if (ImageArr.length === 4) setMultiple(true)
                return
            } else {
                if (ImageArr.length === 5) {
                    setMultiple(true)
                    return
                }
                return
            }
        } else if (placeholder == '' && placeholder1 == '' && placeholder2 == '' && placeholder3 == '' && placeholder4 == '') {
            return

        } else {
            if (src === '/contactActive.png') {
                setCondition(true)
                return
            } else if (src === '/omniActive.png') {
                setCondition1(true)
                return
            } else if (src === '/schedulingActive.png') {
                setCondition2(true)
                return
            } else if (src === '/chatbotsActive.png') {
                setCondition3(true)
                return
            } else if (src === '/signatureActive.png') {
                setCondition4(true)
                return
            } else if (src === '/secureActive.png') {
                setCondition5(true)
                return
            } else if (src === '/learningActive.png') {
                setCondition6(true)
                return
            } else if (src === '/privateActive.png') {
                setCondition7(true)
                return
            }
            return
        }
    }
    return (
        <section className="flex flex-col items-center px-9 z-0 mt-24 ">
            <div className="relative">
                <div className="h-56 w-[970px] absolute bottom-[135px] right-[61px]">
                    <div className="flex justify-center items-center h-full w-full flex-col">
                        <h1 className="text-black text-5xl font-bold text-center"> <span className="text-[#03E2E1]">Every</span> <span className="font-normal">Tool </span>your business <span className="text-[#03E2E1]">Needs</span>,  </h1>
                        <h1 className="text-[#03E2E1] pt-3 text-6xl font-bold text-center">In-One-Place<span className="text-[black!important]">...</span> </h1>
                    </div>
                </div>
                <Image src={'/ring.png'} alt="ring" className="h-[90%] w-[1100px]" width={1100} height={950} />
                {/* {!multiple && ( */}
                <>
                    <div className={`w-[140px] h-[140px] p-2 ${placeholder !== "" ? "cursor-pointer bg-transparent" : 'cursor-auto'} rounded-full h-36 w-36 absolute bottom-14 left-16 bgGlass`}>
                        <div className="flex justify-center items-center w-full h-full">
                            {placeholder ? (<img alt={placeholder} src={placeholder} height={140} width={140} onClick={() => {
                                toggleConditon(placeholder);
                                setPlaceholder('');
                                setImageArr(ImageArr.filter(val => val !== placeholder))
                            }} />) : (<p></p>)}
                        </div>
                    </div>
                    <div className={`w-[140px] h-[140px] p-2 ${placeholder1 !== "" ? "cursor-pointer bg-transparent" : 'cursor-auto'} rounded-full h-36 w-36 absolute bottom-4 left-56 bgGlass `}>
                        <div className="flex justify-center items-center w-full h-full">
                            {placeholder1 && <img alt={placeholder1} src={placeholder1} height={140} width={140} onClick={() => {
                                toggleConditon(placeholder1);
                                setPlaceholder1('');
                                setImageArr(ImageArr.filter(val => val !== placeholder1))
                            }} />}
                        </div>
                    </div>
                    <div className={`w-[140px] h-[140px] p-2 ${placeholder2 !== "" ? "cursor-pointer bg-transparent" : 'cursor-auto'} rounded-full h-36 w-36 absolute bottom-14 right-24 bgGlass`}>
                        <div className="flex justify-center items-center w-full h-full">
                            {placeholder2 && <img alt={placeholder2} src={placeholder2} height={140} width={140} onClick={() => {
                                toggleConditon(placeholder2);
                                setPlaceholder2('');
                                setImageArr(ImageArr.filter(val => val !== placeholder2))
                            }} />}
                        </div>
                    </div>

                    <div className={`w-[140px] h-[140px] p-2 ${placeholder3 !== "" ? "cursor-pointer bg-transparent" : 'cursor-auto'} rounded-full h-36 w-36 absolute bottom-3 right-64 bgGlass`}>
                        <div className="flex justify-center items-center w-full h-full">
                            {placeholder3 && <img alt={placeholder3} src={placeholder3} height={140} width={140} onClick={() => {
                                toggleConditon(placeholder3);
                                setPlaceholder3('');
                                setImageArr(ImageArr.filter(val => val !== placeholder3))
                            }} />}
                        </div>
                    </div>
                    <div className={`w-[140px] h-[140px] p-2 ${placeholder4 !== "" ? "cursor-pointer bg-transparent" : 'cursor-auto'} rounded-full h-36 w-36 absolute bottom-3 right-0 hidden bgGlass`}>
                        <div className="flex justify-center items-center w-full h-full">
                            {placeholder4 && <img alt={placeholder4} src={placeholder4} height={140} width={140} onClick={() => {
                                toggleConditon(placeholder4);
                                setPlaceholder4('');
                                setImageArr(ImageArr.filter(val => val !== placeholder4))
                            }} />}
                        </div>
                    </div>
                </>
                {/* {)}} */}
                <div className={`bgBanner bg-[#d3dfe0] rounded ${multiple && 'h-36 w-[300px!important] right-[420px!important]'} h-36 w-48 absolute bottom-2 right-[455px] transition-all`}>
                    <div className="flex flex-wrap h-full w-full ">
                        {/* {multiple && ImageArr.map((val, i) => (
                            <div key={i} className="h-[50%] w-[50%] hidden">
                                <img src={val} className="h-full w-full object-contain" />
                            </div>
                        ))} */}
                    </div>
                </div>
            </div>

            <div className="mt-10 flex flex-col justify-center items-center">
                <h1 className="text-2xl font-semibold">How would you like to grow your business?</h1>
                <div className='w-[100%] flex gap-10 justify-center items-start'>

                    <div className={`flex justify-center cursor-pointer items-center flex-col w-[120px]`}>
                        <div onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)} className={`rounded-full relative ${!isHovered ? "bgGlass p-3" : "bg-transparent p-0"} w-[120px] h-[120px] mainDiv`} onClick={() => {
                            toggleConditon('/contactActive.png', setCondition);
                            if (ImageArr.length !== 5) {
                                setCondition(false)
                                return
                            }
                        }} >
                            {condition ? (<>
                                <img alt="contact" src={!isHovered ? "/contactRotate.png" : "/contactRotateHover.png"} className={`absolute object-contain rotateImg ${!isHovered ? "w-24 h-24 top-[2] left-[2]" : "w-36 h-36 top-0 left-0"} `} />

                                <Image alt="contact" width={92} height={92} src={!isHovered ? '/contact.png' : "/contactHover.png"} className={`rounded-full ${!isHovered ? "w-16 h-16 contactIn" : "w-32 h-w-32 absolute top-[12%] left-[1%]"} `} />
                            </>) : (<img alt="contact" src='/contactSelected.png' />)}
                        </div>
                        <p className="text-center">Contact Management</p>
                    </div>

                    <div className={`flex justify-center cursor-pointer items-center flex-col w-[120px] `}>
                        <div onMouseEnter={() => setIsHovered1(true)} onMouseLeave={() => setIsHovered1(false)} className={`rounded-full ${!isHovered1 ? "bgGlass" : "bg-transparent"}  w-[120px] h-[120px] flex items-center justify-center overflow-hidden`} onClick={() => {
                            toggleConditon('/omniActive.png', setCondition1);
                            if (ImageArr.length !== 5) {
                                setCondition1(false)
                                return
                            }
                        }}>
                            {condition1 ? (<Image alt="omni" src={!isHovered1 ? '/omni.png' : "/omniHover.png"} width={90} height={90} className={` hover:scale-125 transition-all ${!isHovered1 ? "w-24 h-24" : "w-[100px] h-[100px]"} duration-500 object-contain`} />) : (<img alt="omni" src='/omniSelected.png' />)}
                        </div>
                        <p className="text-center">Omni-Channel AdManagement</p>
                    </div>

                    <div className="flex justify-center cursor-pointer items-center flex-col w-[120px]">
                        <div onMouseEnter={() => setIsHovered2(true)} onMouseLeave={() => setIsHovered2(false)} className={`rounded-full ${!isHovered2 ? "bgGlass" : "bg-transparent"} w-[120px] h-[120px] flex items-center justify-center overflow-hidden`} onClick={() => {
                            toggleConditon('/schedulingActive.png', setCondition2);
                            if (ImageArr.length !== 5) {
                                setCondition2(false)
                                return
                            }
                        }} >
                            {condition2 ? (<Image alt="scheduling" src={!isHovered2 ? '/scheduling.png' : "/schedulingHover.png"} width={90} height={90} className={` hover:scale-125 transition-all ${!isHovered2 ? "w-24 h-24" : "w-[100px] h-[100px]"} duration-500 object-contain`} />) : (<img alt="omni" src='/schedulingSelected.png' />)}
                        </div>
                        <p className="text-center">e-Scheduling & Custom Links</p>
                    </div>

                    <div className="flex justify-center cursor-pointer items-center flex-col w-[120px]">
                        <div onMouseEnter={() => setIsHovered3(true)} onMouseLeave={() => setIsHovered3(false)} className={`rounded-full ${!isHovered3 ? "bgGlass" : "bg-transparent"} w-[120px] h-[120px] flex items-center justify-center overflow-hidden`} onClick={() => {
                            toggleConditon('/chatbotsActive.png', setCondition3);
                            if (ImageArr.length !== 5) {
                                setCondition3(false)
                                return
                            }
                        }} >
                            {condition3 ? (<Image alt="chatbots" src={!isHovered3 ? '/chatbots.png' : "/chatbotsHover.png"} width={90} height={90} className={` hover:scale-125 transition-all ${!isHovered3 ? "w-24 h-24" : "w-[100px] h-[100px]"} duration-500 object-contain`} />) : (<img alt="omni" src='/chatbotsSelected.png' />)}
                        </div>

                        <p className="text-center">Advanced A.I. Chat Bots</p>
                    </div>

                    <div className="flex justify-center cursor-pointer items-center flex-col w-[120px]">
                        <div onMouseEnter={() => setIsHovered4(true)} onMouseLeave={() => setIsHovered4(false)} className={`rounded-full ${!isHovered4 ? "bgGlass" : "bg-transparent"} w-[120px] h-[120px] flex items-center justify-center overflow-hidden`} onClick={() => {
                            toggleConditon('/signatureActive.png', setCondition4);
                            if (ImageArr.length !== 5) {
                                setCondition4(false)
                                return
                            }
                        }} >
                            {condition4 ? (<Image alt="signature" src={!isHovered4 ? '/signature.png' : "/signatureHover.png"} width={90} height={90} className={` hover:scale-125 transition-all ${!isHovered4 ? "w-24 h-24" : "w-[100px] h-[100px]"} duration-500 object-contain`} />) : (<img alt="omni" src='/signatureSelected.png' />)}
                        </div>
                        <p className="text-center">e-signature & Fillings</p>
                    </div>

                    <div className="flex justify-center cursor-pointer items-center flex-col w-[120px]">
                        <div onMouseEnter={() => setIsHovered5(true)} onMouseLeave={() => setIsHovered5(false)} className={`rounded-full ${!isHovered5 ? "bgGlass" : "bg-transparent"} w-[120px] h-[120px] flex items-center justify-center overflow-hidden`} onClick={() => {
                            toggleConditon('/secureActive.png', setCondition5);
                            if (ImageArr.length !== 5) {
                                setCondition5(false)
                                return
                            }
                        }} >
                            {condition5 ? (<Image alt="secure" src={!isHovered5 ? '/secure.png' : "/secureHover.png"} width={90} height={90} className={` hover:scale-125 transition-all ${!isHovered5 ? "w-24 h-24" : "w-[100px] h-[100px]"} duration-500 object-contain`} />) : (<img alt="omni" src='/secureSelected.png' />)}
                        </div>
                        <p className="text-center">Secure Payment Links</p>
                    </div>

                    <div className="flex justify-center cursor-pointer items-center flex-col w-[120px]">
                        <div onMouseEnter={() => setIsHovered6(true)} onMouseLeave={() => setIsHovered6(false)} className={`rounded-full ${!isHovered6 ? "bgGlass" : "bg-transparent"} w-[120px] h-[120px] flex items-center justify-center overflow-hidden`} onClick={() => {
                            toggleConditon('/learningActive.png', setCondition6);
                            if (ImageArr.length !== 5) {
                                setCondition6(false)
                                return
                            }
                        }} >
                            {condition6 ? (<Image alt="learning" src={!isHovered6 ? '/learning.png' : "/learningHover.png"} width={90} height={90} className={` hover:scale-125 transition-all ${!isHovered6 ? "w-24 h-24" : "w-[100px] h-[100px]"} duration-500 object-contain`} />) : (<img alt="learning" src='/learningSelected.png' />)}
                        </div>
                        <p className="text-center">Learning Management Systems</p>
                    </div>

                    <div className="flex justify-center cursor-pointer items-center flex-col w-[120px]">
                        <div onMouseEnter={() => setIsHovered7(true)} onMouseLeave={() => setIsHovered7(false)} className={`rounded-full relative ${!isHovered7 ? "bgGlass p-3" : "bg-transparent p-0"} w-[120px] h-[120px] mainDiv`} onClick={() => {
                            toggleConditon('/privateActive.png', setCondition7);
                            if (ImageArr.length !== 5) {
                                setCondition7(false)
                                return
                            }
                        }} >
                            {condition7 ? (<>
                                <img alt="private" src={!isHovered7 ? "/privateRotate.png" : "/privateRotateHover.png"} className={`absolute object-contain rotateImg ${!isHovered7 ? "w-24 h-24 top-[2] left-[2]" : "w-36 h-36 top-0 left-0"} `} />

                                <Image alt="private" width={92} height={92} src={!isHovered7 ? '/private.png' : "/privateHover.png"} className={`rounded-full ${!isHovered7 ? "w-16 h-16 contactIn" : "w-32 h-w-32 absolute top-[12%] left-[1%]"} `} />
                            </>) : (<img alt="private" src='/privateSelected.png' />)}
                        </div>
                        <p className="text-center">Private Communities</p>
                    </div>

                </div>
                <button className="text-white px-8 py-3 rounded-3xl bg-[#03E2E1] hover:bg-[#61b4b4]">Get Started {'->'}</button>
                <h3 className="mt-2 font-semibold">14 Day Free Trial Plans Starting at $97/Months</h3>
            </div>

        </section >
    );
};

export default Hero;