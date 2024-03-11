import axios from 'axios';

  //create a loader that takes year as a parameter and calls ergast api to get driver standings
const StandingsLoader= async({params}) => {
    const { year } = params;
    console.log("Year is " + year);
    
    let ergasturl = `http://ergast.com/api/f1/${year}/driverStandings.json`;
      let response = await axios.get(ergasturl) ;
      return response.data;
    
  }
  export default StandingsLoader;