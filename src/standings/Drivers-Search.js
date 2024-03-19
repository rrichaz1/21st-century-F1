import "./Standings.css";
import {  useState,useEffect} from 'react';
import { useParams } from "react-router-dom";
import DriversSearchRow from  './Drivers-Search-Row';
import Spinner from 'react-bootstrap/Spinner';
import { NavLink } from 'react-router-dom';
import Container from 'react-bootstrap/Container';

const DriversSearchResults = () => {   
    const { year } = useParams();
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


    return ( 
        <div>
            <Container>
                <NavLink to="/standings" className={"btn btn-block btn-danger"} role={"button"}> <i className="fas fa-arrow-alt-circle-left"></i> Back</NavLink>
            </Container>
            <div className="mt-2 table-responsive">
                <h4>{year} Standings:</h4>
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
            <div className="credit">
                <span>Flag icons by</span> <a href="https://www.flaticon.com/authors/freepik">Freepik</a><span> from </span><a href="https://www.flaticon.com">www.flaticon.com</a>
            </div>
        </div>
     );
}
 
export default DriversSearchResults;