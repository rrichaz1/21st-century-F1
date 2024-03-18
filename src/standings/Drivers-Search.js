import "./Standings.css";
import { useParams, useLoaderData } from "react-router-dom";
import DriversSearchRow from  './Drivers-Search-Row';


const DriversSearchResults1 = () => {

    const { year } = useParams();
<<<<<<< HEAD
    console.log("DriverSearch js Year is " + year);
=======
    const [driversStandings, setDriversStandings] = useState([]);
    const [isLoading, setLoading] = useState(false);

    useEffect(() => {
        const abortController = new AbortController();  
        setLoading(true);
        
            const fetchDriversStandings = async () => {
            try{
                const ergastDriverUrl=`https://ergast.com/api/f1/${year}/driverStandings.json`;
                // const ergastConstructorUrl=`http://ergast.com/api/f1/${year}/contructorStandings.json`;

                // const standings = await Promise.all([
                //     fetch(ergastDriverUrl).then((response) => response.json()),
                //     fetch(ergastConstructorUrl).then((response) => response.json())
                // ]);
                const standings = await fetch(ergastDriverUrl).then((response) => response.json());
                setDriversStandings(standings.MRData.StandingsTable.StandingsLists[0].DriverStandings);
                setLoading(false);
            
                }
                catch (error) {
                    console.log(error);
                }};
        fetchDriversStandings();
        return () => {
            abortController.abort();
        };
    }, [year])

    if (isLoading) {
        return (
            <Spinner animation="border" role="status">
              <span className="visually-hidden">Loading...</span>
            </Spinner>
          );
        }
>>>>>>> 80665f5 (added results api call)

    //const {standings, standingsConstructor} = useLoaderData();
    const standings = useLoaderData(); 
    
    //console.log(standingsConstructor);
    const driversStandings = standings[0].MRData.StandingsTable.StandingsLists[0].DriverStandings;
    console.log(driversStandings);
  

    if (driversStandings.length === 0) {
        return(
            <div>
                <h4>Results for {year}:</h4>
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
 
export default DriversSearchResults1;


