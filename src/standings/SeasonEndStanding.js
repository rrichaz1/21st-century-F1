import "./Standings.css";
import { useParams } from "react-router"
import YearSelect from "../common/year-select";
import { Tabs, Tab } from 'react-bootstrap';
import DriversSearchResults from './Drivers-Search';


const SeasonEndStandings = () => {

    const { year } = useParams();
    console.log("SeasonEndStandings js Year is " + year);

  

    return ( 
        
            <div className="container">
                <div className="row">
                    <div className="col-sm-10"> 
                        <div className="display-6 d-inline-block"> {year} Standing</div>
                    </div>
                    <div className="col-sm-2"><YearSelect parentpage={"standings"}/></div>
                </div>    
       
                <Tabs
                    defaultActiveKey="driver"
                    id="standings-tab"
                    className="mb-3"
                >
                <Tab eventKey="driver" title="Driver">
                    <DriversSearchResults />
                </Tab>
                <Tab eventKey="constructor" title="Constructor">
                    Tab content for Profile
                </Tab>
                </Tabs>
            </div>
        );
    
    }
 
export default SeasonEndStandings;


