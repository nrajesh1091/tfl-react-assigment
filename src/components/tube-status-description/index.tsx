import { useTflData } from "@contexts/TflDataContext";
import type { TflStatus, TflStatusResponse } from "@models/TflStatus";
import type { TubeGroup } from "@models/tube-status-description";
import { tflDataGroupBy } from "@services/home";
import { CheckCircle, Clock, AlertOctagon, Construction } from "lucide-react";
import { Tooltip } from 'react-tooltip'
import { Fragment } from "react/jsx-runtime";
// Sample mapping function


// Tailwind classes for each group
const statusClasses = {
    green: "flex   p-2 mb-2 text-green-800 bg-green-100 rounded-lg ",
    yellow: "flex   p-2 mb-2 text-yellow-800 bg-yellow-100 rounded-lg",
    red: "flex    p-2 mb-2 text-red-800 bg-red-100 rounded-lg",
    orange: "flex    p-2 mb-2 text-orange-800 bg-orange-100 rounded-lg"
};
const status = {
    green: {title :"Good Service", icon : <CheckCircle className="w-4 h-4 text-green-600" />},
    yellow: {title :"Minor Delays", icon : <Clock className="w-4 h-4"  />},
    red: {title :"Outages", icon : <Construction  className="w-4 h-4 text-red-600" />},
    orange: {title :"Delays" , icon : <AlertOctagon  className="w-4 h-4 text-orange-600" />},
};
const TflStatusDashboard = () => {
    // Group lines
    const groupedLines: TubeGroup | undefined =useTflData();
    return (
        <section className="p-4 space-y-6 flex flex-wrap md:h-70 gap-4">
            {(["red", "orange", "yellow", "green"] as (keyof TubeGroup)[]).filter((group) => groupedLines?.[group].length).map((group,index) => (
                <article className="sm:w-full md:w-min min-w-[280px]" key={group}>
                    <div className={`space-y-2  md:w-80 md:h-70 overflow-y-auto ${statusClasses[group]} grow md:grow-0`} role="alert">
                        <span className="mr-2">{status[group].icon}</span>
                        <div className="flex-col">
                            {groupedLines?.[group]?.map((line ,index) => (<Fragment key={index} >
                                <div key={line.id} className="flex grow   md:grow-0 p-1 mb-1 rounded-lg" >
                                    <span className="font-bold p-1 mb-1">{line.name}</span>
                                    <span className="italic p-1 mb-1">{line.status}</span>
                                    {line.reason && <><a href="#" data-tooltip-id={`${index}`}
                                        data-tooltip-content={`${line.reason}`} className="text-blue-600 visited:text-purple-600 ...">ℹ️</a>
                                        <Tooltip id={`${index}`} opacity={0.5} />
                                        </>
                                        }
                                </div>
                            </Fragment>
                            ))}
                        </div>
                    </div>
                </article>
            ))}
        </section>
    );
};

export default TflStatusDashboard;
