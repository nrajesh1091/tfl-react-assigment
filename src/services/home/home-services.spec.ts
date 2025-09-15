// adjust path

import type { TflStatusResponse } from "@models/TflStatus";
import { tflDataGroupBy } from "./home-service";

// Mock data
const mockData: TflStatusResponse = [
    {
        "$type": "Tfl.Api.Presentation.Entities.Line, Tfl.Api.Presentation.Entities",
        "id": "bakerloo",
        "name": "Bakerloo",
        "modeName": "tube",
        "disruptions": [],
        "created": "2025-09-11T15:21:16.64Z",
        "modified": "2025-09-11T15:21:16.64Z",
        "lineStatuses": [
            {
                "$type": "Tfl.Api.Presentation.Entities.LineStatus, Tfl.Api.Presentation.Entities",
                "id": 0,
                "statusSeverity": 10,
                "statusSeverityDescription": "Good Service",
                "created": "0001-01-01T00:00:00",
                "validityPeriods": []
            }
        ],
        "routeSections": [],
        "serviceTypes": [
            {
                "$type": "Tfl.Api.Presentation.Entities.LineServiceTypeInfo, Tfl.Api.Presentation.Entities",
                "name": "Regular",
                "uri": "/Line/Route?ids=Bakerloo&serviceTypes=Regular"
            }
        ],
        "crowding": {
            "$type": "Tfl.Api.Presentation.Entities.Crowding, Tfl.Api.Presentation.Entities"
        }
    },
    {
        "$type": "Tfl.Api.Presentation.Entities.Line, Tfl.Api.Presentation.Entities",
        "id": "central",
        "name": "Central",
        "modeName": "tube",
        "disruptions": [],
        "created": "2025-09-11T15:21:16.64Z",
        "modified": "2025-09-11T15:21:16.64Z",
        "lineStatuses": [
            {
                "$type": "Tfl.Api.Presentation.Entities.LineStatus, Tfl.Api.Presentation.Entities",
                "id": 0,
                "lineId": "central",
                "statusSeverity": 6,
                "statusSeverityDescription": "Severe Delays",
                "reason": "Central Line: No service between North Acton and Northolt, westbound only while we remove an obstruction on the track at Hanger Lane. SEVERE DELAYS on the rest of the line. Tickets are being accepted on London Buses, Elizabeth line and Great Western Railway.  ",
                "created": "0001-01-01T00:00:00",
                "validityPeriods": [
                    {
                        "$type": "Tfl.Api.Presentation.Entities.ValidityPeriod, Tfl.Api.Presentation.Entities",
                        "fromDate": "2025-09-15T12:58:27Z",
                        "toDate": "2025-09-16T00:29:00Z",
                        "isNow": true
                    }
                ],
                "disruption": {
                    "$type": "Tfl.Api.Presentation.Entities.Disruption, Tfl.Api.Presentation.Entities",
                    "category": "RealTime",
                    "categoryDescription": "RealTime",
                    "description": "Central Line: No service between North Acton and Northolt, westbound only while we remove an obstruction on the track at Hanger Lane. SEVERE DELAYS on the rest of the line. Tickets are being accepted on London Buses, Elizabeth line and Great Western Railway.  ",
                    "affectedRoutes": [],
                    "affectedStops": [],
                    "closureText": "severeDelays"
                }
            },
            {
                "$type": "Tfl.Api.Presentation.Entities.LineStatus, Tfl.Api.Presentation.Entities",
                "id": 0,
                "lineId": "central",
                "statusSeverity": 3,
                "statusSeverityDescription": "Part Suspended",
                "reason": "Central Line: No service between North Acton and Northolt, westbound only while we remove an obstruction on the track at Hanger Lane. SEVERE DELAYS on the rest of the line. Tickets are being accepted on London Buses, Elizabeth line and Great Western Railway.  ",
                "created": "0001-01-01T00:00:00",
                "validityPeriods": [
                    {
                        "$type": "Tfl.Api.Presentation.Entities.ValidityPeriod, Tfl.Api.Presentation.Entities",
                        "fromDate": "2025-09-15T12:58:27Z",
                        "toDate": "2025-09-15T16:00:27Z",
                        "isNow": true
                    }
                ],
                "disruption": {
                    "$type": "Tfl.Api.Presentation.Entities.Disruption, Tfl.Api.Presentation.Entities",
                    "category": "RealTime",
                    "categoryDescription": "RealTime",
                    "description": "Central Line: No service between North Acton and Northolt, westbound only while we remove an obstruction on the track at Hanger Lane. SEVERE DELAYS on the rest of the line. Tickets are being accepted on London Buses, Elizabeth line and Great Western Railway.  ",
                    "affectedRoutes": [],
                    "affectedStops": [],
                    "closureText": "partSuspended"
                }
            }
        ],
        "routeSections": [],
        "serviceTypes": [
            {
                "$type": "Tfl.Api.Presentation.Entities.LineServiceTypeInfo, Tfl.Api.Presentation.Entities",
                "name": "Regular",
                "uri": "/Line/Route?ids=Central&serviceTypes=Regular"
            },
            {
                "$type": "Tfl.Api.Presentation.Entities.LineServiceTypeInfo, Tfl.Api.Presentation.Entities",
                "name": "Night",
                "uri": "/Line/Route?ids=Central&serviceTypes=Night"
            }
        ],
        "crowding": {
            "$type": "Tfl.Api.Presentation.Entities.Crowding, Tfl.Api.Presentation.Entities"
        }
    },
    {
        "$type": "Tfl.Api.Presentation.Entities.Line, Tfl.Api.Presentation.Entities",
        "id": "circle",
        "name": "Circle",
        "modeName": "tube",
        "disruptions": [],
        "created": "2025-09-11T15:21:16.657Z",
        "modified": "2025-09-11T15:21:16.657Z",
        "lineStatuses": [
            {
                "$type": "Tfl.Api.Presentation.Entities.LineStatus, Tfl.Api.Presentation.Entities",
                "id": 0,
                "statusSeverity": 10,
                "statusSeverityDescription": "Good Service",
                "created": "0001-01-01T00:00:00",
                "validityPeriods": []
            }
        ],
        "routeSections": [],
        "serviceTypes": [
            {
                "$type": "Tfl.Api.Presentation.Entities.LineServiceTypeInfo, Tfl.Api.Presentation.Entities",
                "name": "Regular",
                "uri": "/Line/Route?ids=Circle&serviceTypes=Regular"
            }
        ],
        "crowding": {
            "$type": "Tfl.Api.Presentation.Entities.Crowding, Tfl.Api.Presentation.Entities"
        }
    },
    {
        "$type": "Tfl.Api.Presentation.Entities.Line, Tfl.Api.Presentation.Entities",
        "id": "district",
        "name": "District",
        "modeName": "tube",
        "disruptions": [],
        "created": "2025-09-11T15:21:16.657Z",
        "modified": "2025-09-11T15:21:16.657Z",
        "lineStatuses": [
            {
                "$type": "Tfl.Api.Presentation.Entities.LineStatus, Tfl.Api.Presentation.Entities",
                "id": 0,
                "lineId": "district",
                "statusSeverity": 9,
                "statusSeverityDescription": "Minor Delays",
                "reason": "District Line: Minor delays between Parsons Green and Wimbledon while Network Rail fix a signal failure at East Putney.  GOOD SERVICE on the rest of the line. ",
                "created": "0001-01-01T00:00:00",
                "validityPeriods": [
                    {
                        "$type": "Tfl.Api.Presentation.Entities.ValidityPeriod, Tfl.Api.Presentation.Entities",
                        "fromDate": "2025-09-15T09:04:39Z",
                        "toDate": "2025-09-16T00:29:00Z",
                        "isNow": true
                    }
                ],
                "disruption": {
                    "$type": "Tfl.Api.Presentation.Entities.Disruption, Tfl.Api.Presentation.Entities",
                    "category": "RealTime",
                    "categoryDescription": "RealTime",
                    "description": "District Line: Minor delays between Parsons Green and Wimbledon while Network Rail fix a signal failure at East Putney.  GOOD SERVICE on the rest of the line. ",
                    "affectedRoutes": [],
                    "affectedStops": [],
                    "closureText": "minorDelays"
                }
            }
        ],
        "routeSections": [],
        "serviceTypes": [
            {
                "$type": "Tfl.Api.Presentation.Entities.LineServiceTypeInfo, Tfl.Api.Presentation.Entities",
                "name": "Regular",
                "uri": "/Line/Route?ids=District&serviceTypes=Regular"
            }
        ],
        "crowding": {
            "$type": "Tfl.Api.Presentation.Entities.Crowding, Tfl.Api.Presentation.Entities"
        }
    },
    {
        "$type": "Tfl.Api.Presentation.Entities.Line, Tfl.Api.Presentation.Entities",
        "id": "hammersmith-city",
        "name": "Hammersmith & City",
        "modeName": "tube",
        "disruptions": [],
        "created": "2025-09-11T15:21:16.64Z",
        "modified": "2025-09-11T15:21:16.64Z",
        "lineStatuses": [
            {
                "$type": "Tfl.Api.Presentation.Entities.LineStatus, Tfl.Api.Presentation.Entities",
                "id": 0,
                "statusSeverity": 10,
                "statusSeverityDescription": "Good Service",
                "created": "0001-01-01T00:00:00",
                "validityPeriods": []
            }
        ],
        "routeSections": [],
        "serviceTypes": [
            {
                "$type": "Tfl.Api.Presentation.Entities.LineServiceTypeInfo, Tfl.Api.Presentation.Entities",
                "name": "Regular",
                "uri": "/Line/Route?ids=Hammersmith & City&serviceTypes=Regular"
            }
        ],
        "crowding": {
            "$type": "Tfl.Api.Presentation.Entities.Crowding, Tfl.Api.Presentation.Entities"
        }
    },
    {
        "$type": "Tfl.Api.Presentation.Entities.Line, Tfl.Api.Presentation.Entities",
        "id": "jubilee",
        "name": "Jubilee",
        "modeName": "tube",
        "disruptions": [],
        "created": "2025-09-11T15:21:16.657Z",
        "modified": "2025-09-11T15:21:16.657Z",
        "lineStatuses": [
            {
                "$type": "Tfl.Api.Presentation.Entities.LineStatus, Tfl.Api.Presentation.Entities",
                "id": 0,
                "statusSeverity": 10,
                "statusSeverityDescription": "Good Service",
                "created": "0001-01-01T00:00:00",
                "validityPeriods": []
            }
        ],
        "routeSections": [],
        "serviceTypes": [
            {
                "$type": "Tfl.Api.Presentation.Entities.LineServiceTypeInfo, Tfl.Api.Presentation.Entities",
                "name": "Regular",
                "uri": "/Line/Route?ids=Jubilee&serviceTypes=Regular"
            },
            {
                "$type": "Tfl.Api.Presentation.Entities.LineServiceTypeInfo, Tfl.Api.Presentation.Entities",
                "name": "Night",
                "uri": "/Line/Route?ids=Jubilee&serviceTypes=Night"
            }
        ],
        "crowding": {
            "$type": "Tfl.Api.Presentation.Entities.Crowding, Tfl.Api.Presentation.Entities"
        }
    },
    {
        "$type": "Tfl.Api.Presentation.Entities.Line, Tfl.Api.Presentation.Entities",
        "id": "metropolitan",
        "name": "Metropolitan",
        "modeName": "tube",
        "disruptions": [],
        "created": "2025-09-11T15:21:16.657Z",
        "modified": "2025-09-11T15:21:16.657Z",
        "lineStatuses": [
            {
                "$type": "Tfl.Api.Presentation.Entities.LineStatus, Tfl.Api.Presentation.Entities",
                "id": 0,
                "statusSeverity": 10,
                "statusSeverityDescription": "Good Service",
                "created": "0001-01-01T00:00:00",
                "validityPeriods": []
            }
        ],
        "routeSections": [],
        "serviceTypes": [
            {
                "$type": "Tfl.Api.Presentation.Entities.LineServiceTypeInfo, Tfl.Api.Presentation.Entities",
                "name": "Regular",
                "uri": "/Line/Route?ids=Metropolitan&serviceTypes=Regular"
            }
        ],
        "crowding": {
            "$type": "Tfl.Api.Presentation.Entities.Crowding, Tfl.Api.Presentation.Entities"
        }
    },
    {
        "$type": "Tfl.Api.Presentation.Entities.Line, Tfl.Api.Presentation.Entities",
        "id": "northern",
        "name": "Northern",
        "modeName": "tube",
        "disruptions": [],
        "created": "2025-09-11T15:21:16.64Z",
        "modified": "2025-09-11T15:21:16.64Z",
        "lineStatuses": [
            {
                "$type": "Tfl.Api.Presentation.Entities.LineStatus, Tfl.Api.Presentation.Entities",
                "id": 0,
                "lineId": "northern",
                "statusSeverity": 9,
                "statusSeverityDescription": "Minor Delays",
                "reason": "Northern Line: Minor delays due to an earlier security alert at Euston.  ",
                "created": "0001-01-01T00:00:00",
                "validityPeriods": [
                    {
                        "$type": "Tfl.Api.Presentation.Entities.ValidityPeriod, Tfl.Api.Presentation.Entities",
                        "fromDate": "2025-09-15T11:06:48Z",
                        "toDate": "2025-09-16T00:29:00Z",
                        "isNow": true
                    }
                ],
                "disruption": {
                    "$type": "Tfl.Api.Presentation.Entities.Disruption, Tfl.Api.Presentation.Entities",
                    "category": "RealTime",
                    "categoryDescription": "RealTime",
                    "description": "Northern Line: Minor delays due to an earlier security alert at Euston.  ",
                    "affectedRoutes": [],
                    "affectedStops": [],
                    "closureText": "minorDelays"
                }
            }
        ],
        "routeSections": [],
        "serviceTypes": [
            {
                "$type": "Tfl.Api.Presentation.Entities.LineServiceTypeInfo, Tfl.Api.Presentation.Entities",
                "name": "Regular",
                "uri": "/Line/Route?ids=Northern&serviceTypes=Regular"
            },
            {
                "$type": "Tfl.Api.Presentation.Entities.LineServiceTypeInfo, Tfl.Api.Presentation.Entities",
                "name": "Night",
                "uri": "/Line/Route?ids=Northern&serviceTypes=Night"
            }
        ],
        "crowding": {
            "$type": "Tfl.Api.Presentation.Entities.Crowding, Tfl.Api.Presentation.Entities"
        }
    },
    {
        "$type": "Tfl.Api.Presentation.Entities.Line, Tfl.Api.Presentation.Entities",
        "id": "piccadilly",
        "name": "Piccadilly",
        "modeName": "tube",
        "disruptions": [],
        "created": "2025-09-11T15:21:16.657Z",
        "modified": "2025-09-11T15:21:16.657Z",
        "lineStatuses": [
            {
                "$type": "Tfl.Api.Presentation.Entities.LineStatus, Tfl.Api.Presentation.Entities",
                "id": 0,
                "statusSeverity": 10,
                "statusSeverityDescription": "Good Service",
                "created": "0001-01-01T00:00:00",
                "validityPeriods": []
            }
        ],
        "routeSections": [],
        "serviceTypes": [
            {
                "$type": "Tfl.Api.Presentation.Entities.LineServiceTypeInfo, Tfl.Api.Presentation.Entities",
                "name": "Regular",
                "uri": "/Line/Route?ids=Piccadilly&serviceTypes=Regular"
            },
            {
                "$type": "Tfl.Api.Presentation.Entities.LineServiceTypeInfo, Tfl.Api.Presentation.Entities",
                "name": "Night",
                "uri": "/Line/Route?ids=Piccadilly&serviceTypes=Night"
            }
        ],
        "crowding": {
            "$type": "Tfl.Api.Presentation.Entities.Crowding, Tfl.Api.Presentation.Entities"
        }
    },
    {
        "$type": "Tfl.Api.Presentation.Entities.Line, Tfl.Api.Presentation.Entities",
        "id": "victoria",
        "name": "Victoria",
        "modeName": "tube",
        "disruptions": [],
        "created": "2025-09-11T15:21:16.657Z",
        "modified": "2025-09-11T15:21:16.657Z",
        "lineStatuses": [
            {
                "$type": "Tfl.Api.Presentation.Entities.LineStatus, Tfl.Api.Presentation.Entities",
                "id": 0,
                "statusSeverity": 10,
                "statusSeverityDescription": "Good Service",
                "created": "0001-01-01T00:00:00",
                "validityPeriods": []
            }
        ],
        "routeSections": [],
        "serviceTypes": [
            {
                "$type": "Tfl.Api.Presentation.Entities.LineServiceTypeInfo, Tfl.Api.Presentation.Entities",
                "name": "Regular",
                "uri": "/Line/Route?ids=Victoria&serviceTypes=Regular"
            },
            {
                "$type": "Tfl.Api.Presentation.Entities.LineServiceTypeInfo, Tfl.Api.Presentation.Entities",
                "name": "Night",
                "uri": "/Line/Route?ids=Victoria&serviceTypes=Night"
            }
        ],
        "crowding": {
            "$type": "Tfl.Api.Presentation.Entities.Crowding, Tfl.Api.Presentation.Entities"
        }
    },
    {
        "$type": "Tfl.Api.Presentation.Entities.Line, Tfl.Api.Presentation.Entities",
        "id": "waterloo-city",
        "name": "Waterloo & City",
        "modeName": "tube",
        "disruptions": [],
        "created": "2025-09-11T15:21:16.673Z",
        "modified": "2025-09-11T15:21:16.673Z",
        "lineStatuses": [
            {
                "$type": "Tfl.Api.Presentation.Entities.LineStatus, Tfl.Api.Presentation.Entities",
                "id": 0,
                "statusSeverity": 10,
                "statusSeverityDescription": "Good Service",
                "created": "0001-01-01T00:00:00",
                "validityPeriods": []
            }
        ],
        "routeSections": [],
        "serviceTypes": [
            {
                "$type": "Tfl.Api.Presentation.Entities.LineServiceTypeInfo, Tfl.Api.Presentation.Entities",
                "name": "Regular",
                "uri": "/Line/Route?ids=Waterloo & City&serviceTypes=Regular"
            }
        ],
        "crowding": {
            "$type": "Tfl.Api.Presentation.Entities.Crowding, Tfl.Api.Presentation.Entities"
        }
    }
]

describe("tflDataGroupBy", () => {
    it("should group lines by severity into green, orange, yellow, red", () => {
        const result = tflDataGroupBy(mockData);

        expect(result!.green).toEqual([
            {
                "id": "bakerloo",
                "name": "Bakerloo",
                "status": "Good Service",
            },
            {
                "id": "circle",
                "name": "Circle",
                "status": "Good Service",
            },
            {
                "id": "hammersmith-city",
                "name": "Hammersmith & City",
                "status": "Good Service",
            },
            {
                "id": "jubilee",
                "name": "Jubilee",
                "status": "Good Service",
            },
            {
                "id": "metropolitan",
                "name": "Metropolitan",
                "status": "Good Service",
            },
            {
                "id": "piccadilly",
                "name": "Piccadilly",
                "status": "Good Service",
            },
            {
                "id": "victoria",
                "name": "Victoria",
                "status": "Good Service",
            },
            {
                "id": "waterloo-city",
                "name": "Waterloo & City",
                "status": "Good Service",
            },
        ]);

        expect(result!.orange).toEqual([]);

        expect(result!.yellow).toEqual([
            {
                id: "district", name: "District",
                "reason": "District Line: Minor delays between Parsons Green and Wimbledon while Network Rail fix a signal failure at East Putney.  GOOD SERVICE on the rest of the line. ",
                "status": "Minor Delays",
            },
            {
                "id": "northern",
                "name": "Northern",
                "reason": "Northern Line: Minor delays due to an earlier security alert at Euston.  ",
                "status": "Minor Delays",
            },
        ]);

        expect(result!.red[0].id).toEqual(
            "central"
        );
    });

    it("should return empty groups when input is undefined", () => {
        const result = tflDataGroupBy(undefined);

        expect(result).toEqual(undefined);
    });
});
