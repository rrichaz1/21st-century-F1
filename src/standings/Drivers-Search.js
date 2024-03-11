import "./Standings.css";
import { useParams, useLoaderData } from "react-router-dom";
import DriversSearchRow from  './Drivers-Search-Row';


const DriversSearchResults = () => {

    const { year } = useParams();
    console.log("Year is " + year);

    const standings = useLoaderData();
    // console.log(standings);
    const driversStandings = standings.MRData.StandingsTable.StandingsLists[0].DriverStandings;
    // console.log(driversStandings);

    if (driversStandings.length === 0) {
        return(
            <div>
                <h4>Results for {year}:</h4>
                <p>No results found</p>
            </div>
        );
    }
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


