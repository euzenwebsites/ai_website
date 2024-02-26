import { ArrowRight } from "@mui/icons-material"

const TryFree = ({customClass}) => (
    <button className={`text-black ${customClass} text-2xl rounded-lg font-bold flex items-center py-2 px-3 bg-[#03E2E1] hover:bg-[#3bffff]`}>Try It Free<ArrowRight fontSize="large" /></button>
)

export default TryFree