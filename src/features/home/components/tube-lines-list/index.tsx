import { useTflData } from "@contexts/tfl-data-context"
import type { TflStatus } from "@models/TflStatus";
import type { TubeGroup, TubeStatus } from "@models/TubeStatusDescription";


const undergroundLinesColor: any = {
    Bakerloo: "border-[#B26313]",
    Central: "border-[#DC241F]",
    Circle: "border-[#FFD329]",
    District: "border-[#007D32]",
    "Hammersmith & City": "border-[#F4A9BE]",
    Jubilee: "border-[#A1A5A7]",
    Metropolitan: "border-[#9B0058]",
    Northern: "border-[#000000]",
    Piccadilly: "border-[#0019A8]",
    Victoria: "border-[#0098D8]",
    "Waterloo & City": "border-[#93CEBA]",
    Elizabeth: "border-[#6950A1]",
};


export const TflLinesList = ({ openModalPopUp }) => {
    const tflGroup: TubeGroup | undefined = useTflData();
    return (
        <section>
            <ul className=" space-y-3 lg:columns-2 md:columns-2 sm:colum-1">
                {tflGroup?.red?.map((lines: TubeStatus) => {
                    return <li className={`flex justify-between  items-center p-3 bg-white ${undergroundLinesColor[lines.name]} shadow-md mb-0.5 border-l-5`}>
                        <span> {lines.name} </span>
                        <a onClick={() => openModalPopUp(lines)} href="#" className="p-2 mb-2 text-red-800 min-w-[130px] bg-red-100 rounded-lg">{lines.status}</a>
                    </li>
                })}
                {tflGroup?.orange?.map((lines) => {
                    return <li className={`flex justify-between  items-center p-3 bg-white ${undergroundLinesColor[lines.name]} shadow-md mb-0.5 border-l-5`}>
                        <span> {lines.name} </span>
                        <a onClick={() => openModalPopUp(lines)} href="#" className="p-2 mb-2 text-red-800 min-w-[130px] bg-orange-100 rounded-lg">{lines.status}</a>
                    </li>
                })}
                {tflGroup?.yellow?.map((lines) => {
                    return <li className={`flex justify-between  items-center p-3 bg-white ${undergroundLinesColor[lines.name]} shadow-md mb-0.5 border-l-5`}>
                        <span> {lines.name} </span>
                        <a onClick={() => openModalPopUp(lines)} href="#" className="p-2 mb-2 text-red-800 min-w-[130px] bg-yellow-100 rounded-lg">{lines.status}</a>
                    </li>
                })}
                {tflGroup?.green?.map((lines) => {
                    return <li className={`flex justify-between  items-center p-3 bg-white ${undergroundLinesColor[lines.name]} shadow-md mb-0.5 border-l-5`}>
                        <span> {lines.name} </span>
                        <span className="p-2 mb-2 text-red-800 min-w-[130px] bg-green-100 rounded-lg">{lines.status}</span>
                    </li>
                })}
            </ul>
        </section>
    )
} 