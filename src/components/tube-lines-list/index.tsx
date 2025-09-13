import { useTflData } from "@contexts/TflDataContext"
import type { TubeGroup } from "@models/tube-status-description";


export const TflLinesList = () => {
    const tflGroup: TubeGroup | undefined = useTflData();
    return (
        <ul className=" space-y-3 lg:columns-2 md:columns-2 sm:colum-1">
            {tflGroup?.red?.map((lines) => {
                return <li className="flex justify-between  items-center p-3 bg-white border-[#b26300] shadow-md mb-0.5 border-l-5">
                   <span> {lines.name} </span>
                    <span className="p-2 mb-2 text-red-800 min-w-[130px] bg-red-100 rounded-lg">{lines.status}</span>
                </li>
            })}
            {tflGroup?.orange?.map((lines) => {
                return <li>{lines.name}</li>
            })}
            {tflGroup?.yellow?.map((lines) => {
                return <li>{lines.name}</li>
            })}
            {tflGroup?.green?.map((lines) => {
                return <li>{lines.name}</li>
            })}
        </ul>
    )
} 