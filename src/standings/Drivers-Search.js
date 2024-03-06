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

console.log(driversStandings);

    return ( 
        <div className="mt-2">
            <h4>Results for {year}:</h4>
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