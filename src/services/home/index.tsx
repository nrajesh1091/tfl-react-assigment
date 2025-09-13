import type { AppConfig } from "@models/AppConfig";
import type { TflStatus, TflStatusResponse } from "@models/TflStatus";
import type { TubeGroup } from "@models/tube-status-description";




const getStatusGroup = (severity: number) => {
    if (severity === 10) return "green"; // Good Service
    else if (severity === 6 || severity === 5) return "orange";
    else if (severity === 9) return "yellow"; // Minor/Moderate/Severe Delays
    else return "red"; // Part Closure / Suspended
};
export const tflDataGroupBy = (tflResData: TflStatusResponse | undefined) => tflResData?.reduce<TubeGroup>((acc: TubeGroup, line: TflStatus) => {
        line.lineStatuses.forEach((status) => {
            const severity = status.statusSeverity || 10;
            const group = getStatusGroup(severity);

            if (!acc[group]) acc[group] = [];
            acc[group].push({
                id: line.id,
                name: line.name,
                status: line.lineStatuses[0]?.statusSeverityDescription,
                ...(line.lineStatuses?.[0].reason && { reason: line.lineStatuses[0]?.reason }),
            });
        })


        return acc;
    }, {
        "green": [],
        "yellow": [],
        "orange": [],
        "red": [],
    });
