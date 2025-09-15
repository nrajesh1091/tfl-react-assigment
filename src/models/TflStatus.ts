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
    lineId?:string,
    disruption?: Disruption
  }
  
   interface ServiceType {
    $type: string;
    name: string;
    uri: string;
  }
  
   interface Crowding {
    $type: string;
  }
  
interface Disruption {
    $type: string;               
    category: string;            
    categoryDescription: string; 
    description: string;         
    affectedRoutes: any[];       
    affectedStops: any[];        
    closureText: string;        
  }
  
  export type TflStatusResponse = TflStatus[] | null;