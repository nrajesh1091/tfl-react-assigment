import type { TflStatus, TflStatusResponse } from "@models/TflStatus";
import type { TubeGroup } from "@models/tube-status-description";
import React from "react";

// Sample mapping function
const getStatusGroup = (severity: number) => {
    if (severity === 10) return "green"; // Good Service
    else if (severity >= 6 && severity < 10) return "yellow"; // Minor/Moderate/Severe Delays
    else return "red"; // Part Closure / Suspended
};

// Tailwind classes for each group
const statusClasses = {
    green: "bg-green-500 text-white",
    yellow: "bg-yellow-400 text-black",
    red: "bg-red-600 text-white",
    orange :  "bg-orange-400 text-black"
};

const TflStatusDashboard = ({ tflStatus }: { tflStatus: TflStatusResponse }) => {
    // Group lines
    const groupedLines:TubeGroup | undefined = tflStatus?.reduce<TubeGroup>((acc: TubeGroup, line: TflStatus) => {
        const severity = line.lineStatuses[0]?.statusSeverity || 10;
        const group = getStatusGroup(severity);

        if (!acc[group]) acc[group] = [];
        acc[group].push({
            id: line.id,
            name: line.name,
            status: line.lineStatuses[0]?.statusSeverityDescription,
          ...( line.lineStatuses?.[0].reason && {reason: line.lineStatuses[0]?.reason }   ),
        });

        return acc;
    }, {
        "green": [],
        "yellow": [],
        "orange": [],
        "red": [],
    });

    return (
        <div className="p-4 space-y-6">
            {( ["green", "yellow", "red"] as (keyof TubeGroup)[] ).map((group) => (
                <div key={group}>
                    <h2 className="text-xl font-semibold capitalize mb-2">{group} Lines</h2>
                    <div className="space-y-2">
                        {groupedLines?.[group]?.map((line) => (
                            <div
                                key={line.id}
                                className={`p-3 rounded shadow-md flex flex-col sm:flex-row sm:justify-between items-start sm:items-center ${statusClasses[group]}`}
                            >
                                <span className="font-bold">{line.name}</span>
                                <span className="italic">{line.status}</span>
                                {line.reason && <p className="text-sm mt-1 sm:mt-0">{line.reason}</p>}
                            </div>
                        ))}
                    </div>
                </div>
            ))}
        </div>
    );
};

export default TflStatusDashboard;
