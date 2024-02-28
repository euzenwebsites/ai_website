import { CheckBox } from "@mui/icons-material";
import Image from "next/image";
import TryFree from "./TryFree";

const Section2Cmp = ({ h1, data, imgSrc, customClass, italic }) => (
    <div className={`md:px-[100px] sm:px-[40px] px-[20px] flex items-center ${customClass}`}>
        <div className="flex-[0.5] h-full w-full ">
            <h1 className="font-bold text-3xl"> {h1} <i>{italic}</i> </h1>
            <div className="mt-4 text-lg text-gray-800 font-medium">
                {data?.para?.map((val, i) => <p className="mt-5" key={i}> {val} </p>)}
            </div>
            <div className="mt-6 text-lg text-gray-800 font-medium">
                {data?.checkPara?.map((val, i) => <div key={i} className="flex items-center gap-2 mt-4">
                    <CheckBox fontSize="medium" />
                    <p> {val} </p>
                </div>
                )}
            </div>
            <TryFree customClass="mt-6 sm:ml-[-20px]" />
        </div>
        <div className="flex-[0.5] h-full w-full">
            <Image height={1500} width={1500} src={imgSrc} alt="chatBot" />
        </div>
    </div>
)

export default Section2Cmp