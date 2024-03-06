import "./Standings.css";
import {  useState,useEffect} from 'react';
import { useParams } from "react-router-dom";
import DriversSearchRow from  './Drivers-Search-Row';

const DriversSearchResults = () => {

    const { year } = useParams();
    const [driversStandings, setDriversStandings] = useState([]);
    useEffect(() => {
        const fetchDriversStandings = async () => {
        const rsp = await fetch("/21st-century-F1/drivers23.json");
        const standings = await rsp.json();
        setDriversStandings(standings.MRData.StandingsTable.StandingsLists[0].DriverStandings);
        };
        fetchDriversStandings();
   
    }, [])


//     function fetchDriversStandings() {
//         fetch('/21st-century-F1/drivers23.json')
//         .then((res) => {
//             if (!res.ok) {
//                 throw new Error
//                     (`HTTP error! Status: ${res.status}`);
//             }
//             else{
//                 console.log("HTTP status: ", res.status);
//                 console.log(res);
//             }
//             return res.json();
//         })
//         .then((data) => 
//               {
//                 console.log(data);
//                 console.log("testing")
//                 console.log(data.MRData.StandingsTable.StandingsLists[0])
//                 return data.MRData.StandingsTable.StandingsLists.DriverStandings;
//               })
//         .catch((error) => 
//                console.error("Unable to fetch data:", error));
// }

// const driversStandings = fetchDriversStandings(); 

console.log(driversStandings);

    return ( 
        <div className="mt-2">
            <h4>Results for {year}:</h4>
            {/* {driversStandings.map((h) => console.log(h.position+" "+h.Driver.givenName+" "+h.Driver.familyName+" "+h.Constructors[0].name+" "+h.points))} */}
            <table className="table table-hover">
                <thead className="table-light">
                    <tr>
                        <th>Position</th>
                        <th>Nationality</th>
                        <th>Driver</th>
                        <th>Constructor</th>
                        <th>Points</th>
                    </tr>
                </thead>
                <tbody>
                {driversStandings.map((h) => (
                    <DriversSearchRow key={h.position} driverStanding={h} />
                ))} 
                </tbody>
            </table>
        </div>
     );
}
 
export default DriversSearchResults;