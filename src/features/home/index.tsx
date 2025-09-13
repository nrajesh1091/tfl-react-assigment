import { useFetch } from "@API";
import { TflLinesList } from "@components/tube-lines-list";
import TflStatusDashboard from "@components/tube-status-description";
import { useAppConfig } from "@contexts/AppContext";
import { TflDataContext } from "@contexts/TflDataContext";
import type { AppConfig } from "@models/AppConfig";
import { tflDataGroupBy } from "@services/home"
import { useMemo } from "react";

export const Home = () => {
    const AppConfig: AppConfig = useAppConfig();

    const tlfAPILink = `${AppConfig?.apiDomain}Line/Mode/Tube/Status`
    const { data, error } = useFetch(tlfAPILink);

    const tflDataMemo = useMemo(() => tflDataGroupBy(data), [data])
    return (
        <TflDataContext tflData={tflDataMemo}>
            <TflStatusDashboard ></TflStatusDashboard>
            <TflLinesList></TflLinesList>
        </TflDataContext>)
}