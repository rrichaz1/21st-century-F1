import "./Results.css";
import Image from "react-bootstrap/Image";

const ResultsSearchRow = ({result}) => {
    console.log("Result is "+result.Results[0]);
    console.log("Result country is "+result.Circuit.Location.country);
    const icon = `/21st-century-F1/icons/${result.Circuit.Location.country}.png`;

    return ( 
        <tr>
            <td>
                { <Image src={icon} width="35" height="35"/> }
            </td>
            <td>{result.raceName}</td>
            <td>{result.date}</td>
            <td>{result.Results[0].Driver.givenName + " " + result.Results[0].Driver.familyName}</td>
            <td>{result.Results[0].Constructor.name}</td>
        </tr>
     );
}
 
export default ResultsSearchRow;
