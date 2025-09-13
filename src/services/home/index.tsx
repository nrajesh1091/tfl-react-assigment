import { useFetch } from "@API";
import { useAppConfig } from "@contexts/AppContext"
import { useLoader } from "@contexts/LoaderContext";
import type { AppConfig } from "@models/AppConfig";
import type { TflStatusResponse } from "@models/TflStatus";


export const LoadTflLineData = ():TflStatusResponse => {
    const AppConfig: AppConfig = useAppConfig();
    const { showLoader, hideLoader } = useLoader();
    const tlfAPILink = `${AppConfig?.apiDomain}Line/Mode/Tube/Status`
    const { data, loading, error } = useFetch(tlfAPILink);
    loading && showLoader();
    !loading && hideLoader();

    return data;
}