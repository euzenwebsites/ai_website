"use client"
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const Hero = () => {
    const [placeholder, setPlaceholder] = useState('')
    const [placeholder1, setPlaceholder1] = useState('')
    const [placeholder2, setPlaceholder2] = useState('')
    const [placeholder3, setPlaceholder3] = useState('')
    const [placeholder4, setPlaceholder4] = useState('')
    const [placeholder5, setPlaceholder5] = useState('')
    const [placeholder6, setPlaceholder6] = useState('')

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
    const [toggleImg, setToggleImg] = useState(false);
    let [ImageArr, setImageArr] = useState([]);

    const toggleConditon = (src) => {
        if (src !== placeholder && src !== placeholder1 && src !== placeholder2 && src !== placeholder3 && src !== placeholder4 && src !== placeholder5 && src !== placeholder6) {
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
                return
            } else if (placeholder5 === '') {
                setImageArr([...ImageArr, src])
                setPlaceholder5(src)
                return

            } else if (placeholder6 === "") {
                setImageArr([...ImageArr, src])
                setPlaceholder6(src)
                if (ImageArr.length === 6) {
                    setToggleImg(true)
                    setTimeout(() => {
                        setToggleImg(false)
                    }, 2500)
                }
                return
            }
        } else {
            if (src === '/activeBubbles/contactActive.png') {
                setCondition(true)
                return
            } else if (src === '/activeBubbles/omniActive.png') {
                setCondition1(true)
                return
            } else if (src === '/activeBubbles/schedulingActive.png') {
                setCondition2(true)
                return
            } else if (src === '/activeBubbles/chatbotsActive.png') {
                setCondition3(true)
                return
            } else if (src === '/activeBubbles/signatureActive.png') {
                setCondition4(true)
                return
            } else if (src === '/activeBubbles/secureActive.png') {
                setCondition5(true)
                return
            } else if (src === '/activeBubbles/learningActive.png') {
                setCondition6(true)
                return
            } else if (src === '/activeBubbles/privateActive.png') {
                setCondition7(true)
                return
            }
            return
        }
    }
    return (
        <section className="lg:flex hidden flex-col items-center z-0 mt-16 md:px-[100px] sm:px-[40px] px-[10px] w-full max-w-[1550px]">
            <div className="relative">
                <div className="lg:h-[80%] w-full flex justify-center items-center absolute  afterlgCustom:top-9 top-4 ">
                    <div className="flex justify-center items-center w-[full] flex-col">
                        <h1 className="text-black before2xlagin:text-5xl text-3xl font-bold text-center"> <span className="text-[#03E2E1]">Every</span> <span className="font-normal">Tool </span> <span className="font-normal italic underline"> your business</span> <span className="text-[#03E2E1]">Needs</span>,  </h1>
                        <h1 className="text-[#03E2E1] pt-3 text-4xl before2xlagin:text-6xl font-bold text-center">In-One-Place... </h1>
                    </div>
                </div>
                <Image src={'/ring1.png'} width={1400} height={900} alt="ring" className="w-[100%] h-[100%] flex justify-center items-center object-contain p-0 " />
                {/* {!multiple && ( */}
                <div className="flex justify-center w-full">
                    <div className=" before2xl:w-[75%] w-[80%] absolute customXl:bottom-[90px] bottom-[40px] before2xl:left-44 left-24 h-fit flex justify-between items-end z-50 ">
                        <div className="flex items-end gap-2">
                            <div className={`rounded-full before2xl:h-[100px] before2xl:w-[100px] w-[80px] h-[80px] bgGlass mb-8 before2xl:mb-6 `}>
                                {placeholder4 && <Image className="cursor-pointer z-50" alt={placeholder4} src={placeholder4} height={140} width={140} onClick={() => {
                                    toggleConditon(placeholder4);
                                    setPlaceholder4('');
                                    setImageArr(ImageArr.filter(val => val !== placeholder4))
                                }} />}
                            </div>
                            <div className={`p-2 rounded-full before2xl:h-[100px] before2xl:w-[100px] w-[80px] h-[80px] bgGlass -mb-1 before2xl:-mb-2`}>
                                {placeholder2 && <Image className="cursor-pointer z-50" alt={placeholder2} src={placeholder2} height={140} width={140} onClick={() => {
                                    toggleConditon(placeholder2);
                                    setPlaceholder2('');
                                    setImageArr(ImageArr.filter(val => val !== placeholder2))
                                }} />}
                            </div>
                            <div className={`p-2 rounded-full before2xl:h-[100px] before2xl:w-[100px] w-[80px] h-[80px] bgGlass -mb-6 before2xl:-mb-8`}>
                                {placeholder && <Image className="cursor-pointer z-50" alt={placeholder} src={placeholder} height={140} width={140} onClick={() => {
                                    toggleConditon(placeholder);
                                    setPlaceholder('');
                                    setImageArr(ImageArr.filter(val => val !== placeholder))
                                }} />}
                            </div>
                        </div>
                        <div className="flex items-end gap-2">
                            <div className={`p-2 rounded-full before2xl:h-[100px] before2xl:w-[100px] w-[80px] h-[80px] bgGlass -mb-8 before2xl:-mb-8 `}>
                                {placeholder1 && <Image className="cursor-pointer z-50" alt={placeholder1} src={placeholder1} height={140} width={140} onClick={() => {
                                    toggleConditon(placeholder1);
                                    setPlaceholder1('');
                                    setImageArr(ImageArr.filter(val => val !== placeholder1))
                                }} />}
                            </div>
                            <div className={`p-2 rounded-full before2xl:h-[100px] before2xl:w-[100px] w-[80px] h-[80px] bgGlass -mb-3 before2xl:-mb-3`}>
                                {placeholder3 && <Image className="cursor-pointer z-50" alt={placeholder3} src={placeholder3} height={140} width={140} onClick={() => {
                                    toggleConditon(placeholder3);
                                    setPlaceholder3('');
                                    setImageArr(ImageArr.filter(val => val !== placeholder3))
                                }} />}
                            </div>
                            <div className={`p-2 rounded-full before2xl:h-[100px] before2xl:w-[100px] w-[80px] h-[80px] bgGlass mb-7 before2xl:mb-5`}>
                                {placeholder5 && <Image className="cursor-pointer z-50" alt={placeholder5} src={placeholder5} height={140} width={140} onClick={() => {
                                    toggleConditon(placeholder5);
                                    setPlaceholder5('');
                                    setImageArr(ImageArr.filter(val => val !== placeholder5))
                                }} />}
                            </div>
                        </div>
                    </div>
                    <div className={`w-[140px] h-[140px] p-2 ${placeholder6 !== "" ? "cursor-pointer bg-transparent" : 'cursor-auto'} rounded-full h-36 w-36 absolute bottom-3 right-[2] hidden bgGlass `}>
                        <div className="flex justify-center items-center w-full h-full">
                            {placeholder6 && <Image alt={placeholder6} src={placeholder6} height={140} width={140} onClick={() => {
                                toggleConditon(placeholder6);
                                setPlaceholder6('');
                                setImageArr(ImageArr.filter(val => val !== placeholder6))
                            }} />}
                        </div>
                    </div>
                </div>
                <div className="z-0">
                    <div className="flex justify-center w-[103%] absolute bottom-0">
                        <Image width={160} height={160} alt="aiBanner" src="/aibanner.png" className={`before2xl:h-64 h-44 w-44 before2xl:w-64 object-contain z-10`} />
                        {/* */}
                    </div>
                    <div className="flex justify-center w-[103%] absolute bottom-1">
                        <Image width={160} height={160} alt="aiVideo" src={'/aiVideo.gif'} className={`z-0 before2xl:h-60 h-40 w-40 before2xl:w-60 object-contain ${toggleImg && 'z-50'}`} />
                        {/*  */}
                    </div>
                </div>

            </div>


            <div className="mt-12 flex flex-col justify-center items-center w-full">
                <h1 className="text-2xl font-semibold">How would you like to grow your business?</h1>
                <div className='mt-10 w-[100%] flex gap-10 xl:gap-0 afterlg:justify-start afterlg:gap-[75px] xl:justify-between justify-start items-start flex-wrap'>

                    <div className={`flex justify-center cursor-pointer items-center flex-col w-[120px]`}>
                        <div onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)} className={`rounded-full  mainDiv  w-[120px] h-[120px] flex items-center justify-center overflow-hidden relative ${!condition && " z-0 "} ${condition && " bgGlass "} `} onClick={() => {
                            toggleConditon('/activeBubbles/contactActive.png', setCondition);
                            if (ImageArr.length !== 7) {
                                setCondition(false)
                                return
                            }
                        }} >
                            {condition && <>
                                <Image src="/contact1.png" width={80} height={80} className={`transition-all duration-500 w-20 object-contain h-36 absolute z-50 ${isHovered && 'scale-125 z-50'}`} alt="contact" />
                                {isHovered &&
                                    <Image src="/glowLens.png" alt="glow" width={128} height={128} className={`object-contain w-32 h-32 absolute top-[0] left-[1] z-0 rotateImg ${isHovered1 && "z-0"}`} />
                                }
                            </>}
                            <Image className={`-z-50 mr-[6px] mb-[4px] ${!condition && " z-50 mr-0 mb-0 "} `} width={115} height={115} alt="contact" src='/selectedBubbles/contactSelected.png' />

                        </div>
                        <p className="text-center">Contact Management</p>
                    </div>

                    <div className={`flex justify-center cursor-pointer items-center flex-col w-[120px] `}>
                        <div onMouseEnter={() => setIsHovered1(true)} onMouseLeave={() => setIsHovered1(false)} className={`rounded-full mainDiv  w-[120px] h-[120px] flex items-center justify-center overflow-hidden relative ${!condition1 && " z-0 "} ${condition1 && " bgGlass "} `} onClick={() => {
                            toggleConditon('/activeBubbles/omniActive.png', setCondition1);
                            if (ImageArr.length !== 7) {
                                setCondition1(false)
                                return
                            }
                        }}>
                            {condition1 && <>
                                <Image src="/omni.png" width={80} height={80} className={`transition-all duration-500 w-20 object-contain h-36 absolute z-50 ${isHovered1 && 'scale-150 z-50'}`} alt="contact" />
                                {isHovered1 &&
                                    <Image width={128} height={128} src="/glowLens.png" alt="glow" className={`object-contain w-32 h-32 absolute top-[0] left-[0] z-0 rotateImg ${isHovered1 && "z-0"}`} />
                                }
                            </>}
                            <Image className={`-z-50 mr-[6px] mb-[4px] ${!condition1 && " z-50 mr-0 mb-0 "} `} width={115} height={115} alt="omni" src='/selectedBubbles/omniSelected.png' />
                        </div>
                        <p className="text-center">Omni-Channel AdManagement</p>
                    </div>

                    <div className="flex justify-center cursor-pointer items-center flex-col w-[120px]">
                        <div onMouseEnter={() => setIsHovered2(true)} onMouseLeave={() => setIsHovered2(false)} className={`rounded-full mainDiv w-[120px] h-[120px] flex items-center justify-center overflow-hidden relative ${!condition2 && " z-0 "} ${condition2 && " bgGlass "} `} onClick={() => {
                            toggleConditon('/activeBubbles/schedulingActive.png', setCondition2);
                            if (ImageArr.length !== 7) {
                                setCondition2(false)
                                return
                            }
                        }} >
                            {condition2 && <>
                                <Image src="/scheduling.png" width={80} height={80} className={`transition-all duration-500 w-20 object-contain h-36 absolute z-50 ${isHovered2 && 'scale-125 z-50'}`} alt="scheduling" />
                                {isHovered2 &&
                                    <Image src="/glowLens.png" width={128} height={128} alt="glow" className={`object-contain w-32 h-32 absolute top-[0] left-[0] z-0 rotateImg ${isHovered2 && "z-0"}`} />
                                }
                            </>}
                            <Image className={`-z-50 mr-[6px] mb-[4px] ${!condition2 && " z-50 mr-0 mb-0 "} `} width={115} height={115} alt="scheduling" src='/selectedBubbles/schedulingSelected.png' />
                        </div>
                        <p className="text-center">e-Scheduling & Custom Links</p>
                    </div>

                    <div className="flex justify-center cursor-pointer items-center flex-col w-[120px]">
                        <div onMouseEnter={() => setIsHovered3(true)} onMouseLeave={() => setIsHovered3(false)} className={`rounded-full mainDiv w-[120px] h-[120px] flex items-center justify-center overflow-hidden relative ${!condition3 && " z-0 "} ${condition3 && " bgGlass "} `} onClick={() => {
                            toggleConditon('/activeBubbles/chatbotsActive.png', setCondition3);
                            if (ImageArr.length !== 7) {
                                setCondition3(false)
                                return
                            }
                        }} >
                            {condition3 && <>
                                <Image src="/chatbots.png" width={80} height={80} className={`transition-all duration-500 w-20 object-contain h-36 absolute z-50 ${isHovered3 && 'scale-150 z-50'}`} alt="chatbots" />
                                {isHovered3 &&
                                    <Image src="/glowLens.png" alt="glow" width={128} height={128} className={`object-contain w-32 h-32 absolute top-[0] left-[0] z-0 rotateImg ${isHovered3 && "z-0"}`} />
                                }
                            </>}
                            <Image className={`-z-50 mr-[6px] mb-[4px] ${!condition3 && " z-50 mr-0 mb-0 "} `} width={115} height={115} alt="chatbots" src='/selectedBubbles/chatbotsSelected.png' />
                        </div>

                        <p className="text-center">Advanced A.I. Chat Bots</p>
                    </div>

                    <div className="flex justify-center cursor-pointer items-center flex-col w-[120px]">
                        <div onMouseEnter={() => setIsHovered4(true)} onMouseLeave={() => setIsHovered4(false)} className={`rounded-full mainDiv w-[120px] h-[120px] flex items-center justify-center overflow-hidden relative ${!condition4 && " z-0 "} ${condition4 && " bgGlass "} `} onClick={() => {
                            toggleConditon('/activeBubbles/signatureActive.png', setCondition4);
                            if (ImageArr.length !== 7) {
                                setCondition4(false)
                                return
                            }
                        }} >
                            {condition4 && <>
                                <Image src="/signature.png" width={80} height={80} className={`transition-all duration-500 w-20 object-contain h-36 absolute z-50 ${isHovered4 && 'scale-125 z-50'}`} alt="signature" />
                                {isHovered4 &&
                                    <Image src="/glowLens.png" alt="glow" width={128} height={128} className={`object-contain w-32 h-32 absolute top-[0] left-[0] z-0 rotateImg ${isHovered4 && "z-0"}`} />
                                }
                            </>}
                            <Image className={`-z-50 mr-[6px] mb-[4px] ${!condition4 && " z-50 mr-0 mb-0 "} `} width={115} height={115} alt="signature" src='/selectedBubbles/signatureSelected.png' />
                        </div>
                        <p className="text-center">e-signature & Fillings</p>
                    </div>

                    <div className="flex justify-center cursor-pointer items-center flex-col w-[120px]">
                        <div onMouseEnter={() => setIsHovered5(true)} onMouseLeave={() => setIsHovered5(false)} className={`rounded-full mainDiv w-[120px] h-[120px] flex items-center justify-center overflow-hidden relative ${!condition5 && " z-0 "} ${condition5 && " bgGlass "} `} onClick={() => {
                            toggleConditon('/activeBubbles/secureActive.png', setCondition5);
                            if (ImageArr.length !== 7) {
                                setCondition5(false)
                                return
                            }
                        }} >
                            {condition5 && <>
                                <Image src="/secure.png" width={80} height={80} className={`transition-all duration-500 w-20 object-contain h-36 absolute z-50 ${isHovered5 && 'scale-150 z-50'}`} alt="secure" />
                                {isHovered5 &&
                                    <Image src="/glowLens.png" alt="glow" width={128} height={128} className={`object-contain w-32 h-32 absolute top-[0] left-[0] z-0 rotateImg ${isHovered5 && "z-0"}`} />
                                }
                            </>}
                            <Image className={`-z-50 mr-[6px] mb-[4px] ${!condition5 && " z-50 mr-0 mb-0 "} `} width={115} height={115} alt="secure" src='/selectedBubbles/secureSelected.png' />
                        </div>
                        <p className="text-center">Secure Payment Links</p>
                    </div>

                    <div className="flex justify-center cursor-pointer items-center flex-col w-[120px]">
                        <div onMouseEnter={() => setIsHovered6(true)} onMouseLeave={() => setIsHovered6(false)} className={`rounded-full mainDiv w-[120px] h-[120px] flex items-center  justify-center overflow-hidden relative ${!condition6 && " z-0 "} ${condition6 && " bgGlass "} `} onClick={() => {
                            toggleConditon('/activeBubbles/learningActive.png', setCondition6);
                            if (ImageArr.length !== 7) {
                                setCondition6(false)
                                return
                            }
                        }} >
                            {condition6 && <>
                                <Image src="/learning.png" width={80} height={80} className={`transition-all duration-500 w-20 object-contain h-36 absolute z-50 ${isHovered6 && 'scale-150 z-50'}`} alt="learning" />
                                {isHovered6 &&
                                    <Image src="/glowLens.png" alt="glow" width={128} height={128} className={`object-contain w-32 h-32 absolute top-[0] left-[0] z-0 rotateImg ${isHovered6 && "z-0"}`} />
                                }
                            </>}
                            <Image className={`-z-50 mr-[6px] mb-[4px] ${!condition6 && " z-50 mr-0 mb-0 "} `} width={115} height={115} alt="learning" src='/selectedBubbles/learningSelected.png' />
                        </div>
                        <p className="text-center">Learning Management Systems</p>
                    </div>

                    <div className="flex justify-center cursor-pointer items-center flex-col w-[120px]">
                        <div onMouseEnter={() => setIsHovered7(true)} onMouseLeave={() => setIsHovered7(false)} className={`rounded-full mainDiv  w-[120px] h-[120px] flex items-center justify-center overflow-hidden relative ${!condition7 && " z-0 "} ${condition7 && " bgGlass "} `} onClick={() => {
                            toggleConditon('/activeBubbles/privateActive.png', setCondition7);
                            if (ImageArr.length !== 7) {
                                setCondition7(false)
                                return
                            }
                        }} >
                            {condition7 && <>
                                <Image src="/private1.png" width={80} height={80} className={`transition-all duration-500 w-20 object-contain h-36 absolute z-50 ${isHovered7 && 'scale-150 z-50'}`} alt="private" />
                                {isHovered7 &&
                                    <Image src="/glowLens.png" alt="glow" width={128} height={128} className={`object-contain w-32 h-32 absolute top-[0] left-[0] z-0 rotateImg ${isHovered7 && "z-0"}`} />
                                }
                            </>}
                            <Image className={`-z-50 mr-[6px] mb-[4px] ${!condition7 && " z-50 mr-0 mb-0 "} `} width={115} height={115} alt="private" src='/selectedBubbles/privateSelected.png' />
                        </div>
                        <p className="text-center">Private Communities</p>
                    </div>

                </div>
                <Link href='/signup'>
                    <button className="text-white px-8 py-3 rounded-3xl bg-[#03E2E1] hover:bg-[#61b4b4]">Get Started {'->'}</button>
                </Link>
                <h3 className="mt-2 font-semibold">14 Day Free Trial Plans Starting at $97/Months</h3>
            </div>

        </section>
    );
};

export default Hero;