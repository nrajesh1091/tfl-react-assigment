import type { TflStatus, TflStatusResponse } from "@models/TflStatus";
import type { TubeGroup, TubeStatus } from "@models/TubeStatusDescription";

const getStatusGroup = (severity: number) => {
    if (severity === 10) return "green"; // Good Service
    else if (severity === 6 || severity === 5) return "orange";
    else if (severity === 9) return "yellow"; // Minor/Moderate/Severe Delays
    else return "red"; // Part Closure / Suspended
};
export const tflDataGroupBy = (tflResData: TflStatusResponse | undefined) => tflResData?.reduce<TubeGroup>((acc: TubeGroup, line: TflStatus) => {
    const lineDetails: TubeStatus & { severity: number, group: string, statusSeverityDescription: string } = {
        id: "",
        name: line.name,
        status: "",
        reason: "",
        severity: Infinity,
        group: "",
        statusSeverityDescription: ""
    };
    line.lineStatuses.forEach((status) => {
        const severity = status.statusSeverity || 10;
        if (severity < lineDetails.severity) {
            lineDetails.severity = severity;
            lineDetails.statusSeverityDescription = status.statusSeverityDescription
        }
        lineDetails.group = getStatusGroup(lineDetails.severity);
        if (status.reason) {
            lineDetails.reason += (lineDetails.reason ? "\n" : "") + status.reason;
        }

    })

    if (!acc[lineDetails.group]) acc[lineDetails.group] = [];
    acc[lineDetails.group].push({
        id: line.id,
        name: line.name,
        status: lineDetails.statusSeverityDescription,
        ...(lineDetails.reason && { reason: lineDetails.reason }),
    });
    return acc;
}, {
    "green": [],
    "yellow": [],
    "orange": [],
    "red": [],
});
