import "./Standings.css";
import { useLoaderData } from "react-router-dom";
import ConstructorsSearchRow from  './Constructor-Search-Row';


const ConstructorsSearchResults = () => {


    const standings = useLoaderData(); 
    const constructorStandings = standings[1].MRData.StandingsTable.StandingsLists[0].ConstructorStandings;

    if (constructorStandings.length === 0) {
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
                            <th>Constructor</th>
                            <th>Points</th>
                            <th>Wins</th>
                        </tr>
                    </thead>
                    <tbody>
                
                    {constructorStandings.map((h) => (
                        <ConstructorsSearchRow key={h.position} constructorStanding={h} />
                    ))} 
    
                    </tbody>
                </table>
            </>
        );
    
    }
 
export default ConstructorsSearchResults;


