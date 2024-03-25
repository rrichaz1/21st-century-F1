import "./Standings.css";
import { useLoaderData } from "react-router-dom";
import DriversSearchRow from  './Drivers-Search-Row';


const DriversSearchResults = () => {
   
    const standings = useLoaderData(); 
    
    const driversStandings = standings[0].MRData.StandingsTable.StandingsLists[0].DriverStandings;
   

    if (driversStandings.length === 0) {
        return(
            <div>
                <p>No results found</p>
            </div>
        );
    }
    return ( 
        
            <>
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
            </>
        );
    
    }
 
export default DriversSearchResults;


