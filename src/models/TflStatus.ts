 export interface TflStatus{
    $type: string;
    id: string;
    name: string;
    modeName: string;
    disruptions: any[]; // could define properly if needed
    created: string; // ISO date
    modified: string; // ISO date
    lineStatuses: LineStatus[];
    routeSections: any[];
    serviceTypes: ServiceType[];
    crowding: Crowding;
  }
  
   interface LineStatus {
    $type: string;
    id: number;
    statusSeverity: number;
    statusSeverityDescription: string;
    created: string;
    validityPeriods: any[];
    reason?:string;
  }
  
   interface ServiceType {
    $type: string;
    name: string;
    uri: string;
  }
  
   interface Crowding {
    $type: string;
  }
  
  export type TflStatusResponse = TflStatus[] | null;