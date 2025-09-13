import TflStatusDashboard from "@components/tube-status-description";
import type { TflStatusResponse } from "@models/TflStatus";
import { LoadTflLineData } from "@services/home"

export const Home = () => {
    const tflResData: TflStatusResponse = LoadTflLineData();
    return <TflStatusDashboard tflStatus={tflResData}></TflStatusDashboard>
}