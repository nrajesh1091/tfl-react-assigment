import { useFetch } from "@services/API/api";
import { ModalDialog } from "@components/modal/modal";
import { TflLinesList } from "@components/tube-lines-list/tube-lines-list";
import TflStatusDashboard from "@components/tube-status-description/tube-status-description";
import { useAppConfig } from "@contexts/app-context";
import { TflDataContext } from "@contexts/tfl-data-context";
import type { AppConfig } from "@models/AppConfig";
import type { TubeStatus } from "@models/TubeStatusDescription";
import { tflDataGroupBy } from "@services/home/home-service"
import {  useCallback, useEffect, useMemo, useRef, useState } from "react";
import "./home.css"
export const Home = () => {
    const AppConfig: AppConfig = useAppConfig();
    const tlfAPILink = `${AppConfig?.apiDomain}Line/Mode/Tube/Status`
    const [linedata, setLineData] = useState<{ name: string, reason?: string }>({ name: "", reason: "" })
    const [openDialog, setOpenDialog] = useState(false)
    const { data, error } = useFetch(tlfAPILink);
    const dialogRef = useRef<HTMLDialogElement>(null);
    
    const openModalPopUp = useCallback((tubeStatus: TubeStatus) => {
        setLineData(tubeStatus);
        setOpenDialog(true);


    }, [])
    const closeModalPopUp = useCallback((tubeStatus: TubeStatus) => {
        setLineData({ name: "", reason: "" });

        setOpenDialog(false);

    }, [])

    useEffect(() => {
        openDialog ? dialogRef.current?.showModal() : dialogRef.current?.close();
    }, [openDialog])

    const tflDataMemo = useMemo(() => tflDataGroupBy(data), [data])
    return (
        <div className="home-content" >
            <TflDataContext tflData={tflDataMemo}>
                {openDialog && <ModalDialog closeDialog={closeModalPopUp} lineData={linedata} ref={dialogRef}>

                </ModalDialog>}
                <TflStatusDashboard openModalPopUp={openModalPopUp}></TflStatusDashboard>
                <TflLinesList openModalPopUp={openModalPopUp}></TflLinesList>

            </TflDataContext>
        </div>)
}