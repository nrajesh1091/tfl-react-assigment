export interface TubeGroup{
    "green": TubeStatus[];
    "yellow" :TubeStatus[];
    "orange" :TubeStatus[];
    "red" :TubeStatus[] ;
}

export interface TubeStatus{
    id:string;
    reason?:string;
    name : string;
    status : string
}