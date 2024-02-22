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
            }
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
        <section className="flex flex-col items-center z-0 mt-20  md:px-[100px] px-[40px]">
            <div className="relative">
                <div className="h-56 w-[970px] absolute bottom-[140px] right-[70px]">
                    <div className="flex justify-center items-center h-full w-full flex-col">
                        <h1 className="text-black text-5xl font-bold text-center"> <span className="text-[#03E2E1]">Every</span> <span className="font-normal">Tool </span>your business <span className="text-[#03E2E1]">Needs</span>,  </h1>
                        <h1 className="text-[#03E2E1] pt-3 text-6xl font-bold text-center">In-One-Place<span className="text-[black!important]">...</span> </h1>
                    </div>
                </div>
                <Image src={'/ring.png'} alt="ring" width={1150} height={1010} />
                {/* {!multiple && ( */}
                <>
                    <div className={`w-[140px] h-[140px] p-2 ${placeholder !== "" ? "cursor-pointer bg-transparent" : 'cursor-auto'} rounded-full h-36 w-36 absolute bottom-16 left-28 bgGlass`}>
                        <div className="flex justify-center items-center w-full h-full">
                            {placeholder ? (<Image alt={placeholder} src={placeholder} height={140} width={140} onClick={() => {
                                toggleConditon(placeholder);
                                setPlaceholder('');
                                setImageArr(ImageArr.filter(val => val !== placeholder))
                            }} />) : (<p></p>)}
                        </div>
                    </div>
                    <div className={`w-[140px] h-[140px] p-2 ${placeholder1 !== "" ? "cursor-pointer bg-transparent" : 'cursor-auto'} rounded-full h-36 w-36 absolute bottom-5 left-64 bgGlass `}>
                        <div className="flex justify-center items-center w-full h-full">
                            {placeholder1 && <Image alt={placeholder1} src={placeholder1} height={140} width={140} onClick={() => {
                                toggleConditon(placeholder1);
                                setPlaceholder1('');
                                setImageArr(ImageArr.filter(val => val !== placeholder1))
                            }} />}
                        </div>
                    </div>
                    <div className={`w-[140px] h-[140px] p-2 ${placeholder2 !== "" ? "cursor-pointer bg-transparent" : 'cursor-auto'} rounded-full h-36 w-36 absolute bottom-16 right-24 bgGlass`}>
                        <div className="flex justify-center items-center w-full h-full">
                            {placeholder2 && <Image alt={placeholder2} src={placeholder2} height={140} width={140} onClick={() => {
                                toggleConditon(placeholder2);
                                setPlaceholder2('');
                                setImageArr(ImageArr.filter(val => val !== placeholder2))
                            }} />}
                        </div>
                    </div>

                    <div className={`w-[140px] h-[140px] p-2 ${placeholder3 !== "" ? "cursor-pointer bg-transparent" : 'cursor-auto'} rounded-full h-36 w-36 absolute bottom-5 right-64 bgGlass`}>
                        <div className="flex justify-center items-center w-full h-full">
                            {placeholder3 && <Image alt={placeholder3} src={placeholder3} height={140} width={140} onClick={() => {
                                toggleConditon(placeholder3);
                                setPlaceholder3('');
                                setImageArr(ImageArr.filter(val => val !== placeholder3))
                            }} />}
                        </div>
                    </div>
                    <div className={`w-[140px] h-[140px] p-2 ${placeholder4 !== "" ? "cursor-pointer bg-transparent" : 'cursor-auto'} rounded-full h-36 w-36 absolute bottom-3 right-[2] hidden bgGlass `}>
                        <div className="flex justify-center items-center w-full h-full">
                            {placeholder4 && <Image alt={placeholder4} src={placeholder4} height={140} width={140} onClick={() => {
                                toggleConditon(placeholder4);
                                setPlaceholder4('');
                                setImageArr(ImageArr.filter(val => val !== placeholder4))
                            }} />}
                        </div>
                    </div>
                </>
                {multiple && <Image width={240} height={240} alt="aiVideo" src={'/aiVideo.gif'} className={` h-60 w-60 absolute top-[276px] right-[450px] transition-all`} />}
                {!multiple && <Image width={240} height={240} alt="aiBanner" src="/aibanner.png" className={` h-60 w-60 absolute top-[276px] right-[450px] transition-all`} />}

            </div>

            <div className="mt-12 flex flex-col justify-center items-center">
                <h1 className="text-2xl font-semibold">How would you like to grow your business?</h1>
                <div className='w-[100%] flex gap-10 justify-center items-start'>

                    <div className={`flex justify-center cursor-pointer items-center flex-col w-[120px]`}>
                        <div onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)} className={`rounded-full bgGlass mainDiv  w-[120px] h-[120px] flex items-center justify-center overflow-hidden relative`} onClick={() => {
                            toggleConditon('/contactActive.png', setCondition);
                            if (ImageArr.length !== 5) {
                                setCondition(false)
                                return
                            }
                        }} >
                            {condition ? (<>
                                <Image src="/contact1.png" width={80} height={80} className={`w-20 object-contain h-36 absolute z-50 ${isHovered && 'scale-125 z-50'}`} alt="contact" />
                                {isHovered &&
                                    <Image src="/glowLens.png" alt="glow" width={128} height={128} className={`object-contain w-32 h-32 absolute top-[0] left-[0] z-0 rotateImg ${isHovered1 && "z-0"}`} />
                                }
                            </>) : (<Image width={120} height={120} alt="contact" src='/contactSelected.png' />)}
                        </div>
                        <p className="text-center">Contact Management</p>
                    </div>

                    <div className={`flex justify-center cursor-pointer items-center flex-col w-[120px] `}>
                        <div onMouseEnter={() => setIsHovered1(true)} onMouseLeave={() => setIsHovered1(false)} className={`rounded-full bgGlass mainDiv  w-[120px] h-[120px] flex items-center justify-center overflow-hidden relative`} onClick={() => {
                            toggleConditon('/omniActive.png', setCondition1);
                            if (ImageArr.length !== 5) {
                                setCondition1(false)
                                return
                            }
                        }}>
                            {condition1 ? (<>
                                <Image src="/omni.png" width={80} height={80} className={`w-20 object-contain h-36 absolute z-50 ${isHovered1 && 'scale-150 z-50'}`} alt="contact" />
                                {isHovered1 && <Image width={128} height={128} src="/glowLens.png" alt="glow" className={`object-contain w-32 h-32 absolute top-[0] left-[0] z-0 rotateImg ${isHovered1 && "z-0"}`} />}
                            </>) : (<Image width={120} height={120} alt="omni" src='/omniSelected.png' />)}
                        </div>
                        <p className="text-center">Omni-Channel AdManagement</p>
                    </div>

                    <div className="flex justify-center cursor-pointer items-center flex-col w-[120px]">
                        <div onMouseEnter={() => setIsHovered2(true)} onMouseLeave={() => setIsHovered2(false)} className={`rounded-full bgGlass mainDiv w-[120px] h-[120px] flex items-center justify-center overflow-hidden relative`} onClick={() => {
                            toggleConditon('/schedulingActive.png', setCondition2);
                            if (ImageArr.length !== 5) {
                                setCondition2(false)
                                return
                            }
                        }} >
                            {condition2 ? (<>
                                <Image src="/scheduling.png" width={80} height={80} className={`w-20 object-contain h-36 absolute z-50 ${isHovered2 && 'scale-125 z-50'}`} alt="scheduling" />
                                {isHovered2 && <Image src="/glowLens.png" width={128} height={128} alt="glow" className={`object-contain w-32 h-32 absolute top-[0] left-[0] z-0 rotateImg ${isHovered2 && "z-0"}`} />}
                            </>) : (<Image width={120} height={120} alt="scheduling" src='/schedulingSelected.png' />)}
                        </div>
                        <p className="text-center">e-Scheduling & Custom Links</p>
                    </div>

                    <div className="flex justify-center cursor-pointer items-center flex-col w-[120px]">
                        <div onMouseEnter={() => setIsHovered3(true)} onMouseLeave={() => setIsHovered3(false)} className={`rounded-full bgGlass mainDiv w-[120px] h-[120px] flex items-center justify-center overflow-hidden relative`} onClick={() => {
                            toggleConditon('/chatbotsActive.png', setCondition3);
                            if (ImageArr.length !== 5) {
                                setCondition3(false)
                                return
                            }
                        }} >
                            {condition3 ? (<>
                                <Image src="/chatbots.png" width={80} height={80} className={`w-20 object-contain h-36 absolute z-50 ${isHovered3 && 'scale-150 z-50'}`} alt="chatbots" />
                                {isHovered3 && <Image src="/glowLens.png" alt="glow" width={128} height={128} className={`object-contain w-32 h-32 absolute top-[0] left-[0] z-0 rotateImg ${isHovered3 && "z-0"}`} />}
                            </>) : (<Image width={120} height={120} alt="chatbots" src='/chatbotsSelected.png' />)}
                        </div>

                        <p className="text-center">Advanced A.I. Chat Bots</p>
                    </div>

                    <div className="flex justify-center cursor-pointer items-center flex-col w-[120px]">
                        <div onMouseEnter={() => setIsHovered4(true)} onMouseLeave={() => setIsHovered4(false)} className={`rounded-full bgGlass mainDiv w-[120px] h-[120px] flex items-center justify-center overflow-hidden relative`} onClick={() => {
                            toggleConditon('/signatureActive.png', setCondition4);
                            if (ImageArr.length !== 5) {
                                setCondition4(false)
                                return
                            }
                        }} >
                            {condition4 ? (<>
                                <Image src="/signature.png" width={80} height={80} className={`w-20 object-contain h-36 absolute z-50 ${isHovered4 && 'scale-125 z-50'}`} alt="signature" />
                                {isHovered4 && <Image src="/glowLens.png" alt="glow" width={128} height={128} className={`object-contain w-32 h-32 absolute top-[0] left-[0] z-0 rotateImg ${isHovered4 && "z-0"}`} />}
                            </>) : (<Image width={120} height={120} alt="signature" src='/signatureSelected.png' />)}
                        </div>
                        <p className="text-center">e-signature & Fillings</p>
                    </div>

                    <div className="flex justify-center cursor-pointer items-center flex-col w-[120px]">
                        <div onMouseEnter={() => setIsHovered5(true)} onMouseLeave={() => setIsHovered5(false)} className={`rounded-full bgGlass mainDiv w-[120px] h-[120px] flex items-center justify-center overflow-hidden relative`} onClick={() => {
                            toggleConditon('/secureActive.png', setCondition5);
                            if (ImageArr.length !== 5) {
                                setCondition5(false)
                                return
                            }
                        }} >
                            {condition5 ? (<>
                                <Image src="/secure.png" width={80} height={80} className={`w-20 object-contain h-36 absolute z-50 ${isHovered5 && 'scale-150 z-50'}`} alt="secure" />
                                {isHovered5 && <Image src="/glowLens.png" alt="glow" width={128} height={128} className={`object-contain w-32 h-32 absolute top-[0] left-[0] z-0 rotateImg ${isHovered5 && "z-0"}`} />}
                            </>) : (<Image width={120} height={120} alt="secure" src='/secureSelected.png' />)}
                        </div>
                        <p className="text-center">Secure Payment Links</p>
                    </div>

                    <div className="flex justify-center cursor-pointer items-center flex-col w-[120px]">
                        <div onMouseEnter={() => setIsHovered6(true)} onMouseLeave={() => setIsHovered6(false)} className={`rounded-full bgGlass mainDiv w-[120px] h-[120px] flex items-center  justify-center overflow-hidden relative`} onClick={() => {
                            toggleConditon('/learningActive.png', setCondition6);
                            if (ImageArr.length !== 5) {
                                setCondition6(false)
                                return
                            }
                        }} >
                            {condition6 ? (<>
                                <Image src="/learning.png" width={80} height={80} className={`w-20 object-contain h-36 absolute z-50 ${isHovered6 && 'scale-150 z-50'}`} alt="learning" />
                                {isHovered6 && <Image src="/glowLens.png" alt="glow" width={128} height={128} className={`object-contain w-32 h-32 absolute top-[0] left-[0] z-0 rotateImg ${isHovered6 && "z-0"}`} />}
                            </>) : (<Image width={120} height={120} alt="learning" src='/learningSelected.png' />)}
                        </div>
                        <p className="text-center">Learning Management Systems</p>
                    </div>

                    <div className="flex justify-center cursor-pointer items-center flex-col w-[120px]">
                        <div onMouseEnter={() => setIsHovered7(true)} onMouseLeave={() => setIsHovered7(false)} className={`rounded-full bgGlass mainDiv  w-[120px] h-[120px] flex items-center justify-center overflow-hidden relative`} onClick={() => {
                            toggleConditon('/privateActive.png', setCondition7);
                            if (ImageArr.length !== 5) {
                                setCondition7(false)
                                return
                            }
                        }} >
                            {condition7 ? (<>
                                <Image src="/private1.png" width={80} height={80} className={`w-20 object-contain h-36 absolute z-50 ${isHovered7 && 'scale-150 z-50'}`} alt="private" />
                                {isHovered7 && <Image src="/glowLens.png" alt="glow" width={128} height={128} className={`object-contain w-32 h-32 absolute top-[0] left-[0] z-0 rotateImg ${isHovered7 && "z-0"}`} />}
                            </>) : (<Image width={120} height={120} alt="private" src='/privateSelected.png' />)}
                        </div>
                        <p className="text-center">Private Communities</p>
                    </div>

                </div>
                <button className="text-white px-8 py-3 rounded-3xl bg-[#03E2E1] hover:bg-[#61b4b4]">Get Started {'->'}</button>
                <h3 className="mt-2 font-semibold">14 Day Free Trial Plans Starting at $97/Months</h3>
            </div>

        </section>
    );
};

export default Hero;