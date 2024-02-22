import { CheckBox } from "@mui/icons-material";
import { ArrowRight } from "@mui/icons-material"
import Image from "next/image";

const Section2Cmp = ({ h1, data, imgSrc, customClass }) => (
    <div className={`md:px-[100px] sm:px-[40px] px-[20px] flex items-center ${customClass}`}>
        <div className="flex-[0.5] h-full w-full ">
            <h1 className="font-bold text-4xl"> {h1} </h1>
            <div className="mt-4 text-xl font-medium">
                {data?.para?.map((val, i) => <p className="mt-5" key={i}> {val} </p>)}
            </div>
            <div className="mt-6 text-lg font-medium">
                {data?.checkPara?.map((val, i) => <div key={i} className="flex items-center gap-2">
                    <CheckBox fontSize="medium" />
                    <p> {val} </p>
                </div>
                )}
            </div>
            <button className="mt-6 sm:ml-[-20px] text-black text-3xl rounded-2xl font-bold flex items-center p-3 bg-[#03E2E1]">Try It Free<ArrowRight fontSize="large" /></button>
        </div>
        <div className="flex-[0.5] h-full w-full">
            <Image height={1500} width={1500} src={imgSrc} alt="chatBot" />
        </div>
    </div>
)

export default Section2Cmp