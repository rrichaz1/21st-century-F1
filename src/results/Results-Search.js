import "./Results.css";
import {  useState,useEffect} from 'react';
import { useParams } from "react-router-dom";
import ResultsSearchRow from  './Results-Search-Row';
import Spinner from 'react-bootstrap/Spinner';
import { NavLink } from 'react-router-dom';
import Container from 'react-bootstrap/Container';

const ResultSearch = () => {   
    const { year } = useParams();
    const [results, setResults] = useState([]);
    const [isLoading, setLoading] = useState(false);

    useEffect(() => {
        const abortController = new AbortController();  
        setLoading(true);
        
            const fetchResults = async () => {
            try{
                const ergasturl=`https://ergast.com/api/f1/${year}/results/1.json`;
                const response = await fetch(ergasturl).then((response) => response.json());
                console.log("Response "+response);
                setResults(response.MRData.RaceTable.Races);
                console.log(response.MRData.RaceTable.Races);
                setLoading(false);
            
                }
                catch (error) {
                    console.log(error);
                }};
            fetchResults();
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
                <NavLink to="/results" className={"btn btn-block btn-danger"} role={"button"}> <i className="fas fa-arrow-alt-circle-left"></i> Back</NavLink>
            </Container>
            <div className="mt-2 table-responsive">
                <h4>{year} Results:</h4>
                <table className="table table-hover">
                    <thead className="table-light">
                        <tr>
                            <th></th>
                            <th>Grand Prix</th>
                            <th>Date</th>
                            <th>Winner</th>
                            <th>Constructor</th>
                        </tr>
                    </thead>
                    <tbody>
                    {results.map((h) => (
                        <ResultsSearchRow key={h.round} result={h} />
                    ))} 
                    </tbody>
                </table>
            </div>
            <div className="credit">
                <span>Flag icons by</span> <a href="https://www.flaticon.com/authors/freepik">Freepik</a><span> from </span><a href="www.flaticon.com">www.flaticon.com</a>
            </div>
        </div>
     );
}
 
export default ResultSearch;