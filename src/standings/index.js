import './Standings.css';
import Container from 'react-bootstrap/Container';
import Breadcrumb from 'react-bootstrap/Breadcrumb';
import Image from 'react-bootstrap/Image';
import picture from './standings2.jpg';
import { Form } from "react-bootstrap";
import { useNavigate, useLocation } from "react-router-dom";

const Main = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const year = (new Date()).getFullYear();
    const years= Array.from(new Array(year-2000+1), (_,index) => 2000 + index);
    years.unshift("Select Year");
    console.log(years);

    const handleSelectChange = (e) => {
        const selectedYear =e.target.value;    
        console.log(e.target.id);
        console.log(location.pathname);
        
        navigate(`/standings/driver-standings/${selectedYear}`);  
    };

    return (
           <div>
            <div className="jumbotron jumbotron-standings py-5">
                <Container className="container-fluid">
                    <h1 className="display-4 fw-bold text-white text-start">Standings</h1>
                </Container>
            </div>

            <Container>
                <Breadcrumb className="custom-background">
                    <Breadcrumb.Item active>Home</Breadcrumb.Item>
                    <Breadcrumb.Item active>Standings</Breadcrumb.Item>
                </Breadcrumb>

                    <div className="row">
                        <div className="col-lg-8">
                            <p className="text-start">
                                Since the year 2000, there have been eight different world champions. They hail from five different nations. There have also been six different constructors take the crown. These individuals and teams have reached
                                the pinnacle of motorsport, and have been immortalized in the history books. But what about the other drivers and teams? What about the ones who came close, but never quite won? Well, this site is the
                                perfect place to see who they are. 
                            </p>
                        </div>

                        
                        <aside className="col-lg-4">
                            <div>
                            <Form>
                                <Form.Label className="formLabel fw-bold">
                                    Select Year
                                </Form.Label>

                                <Form.Select  onChange={handleSelectChange}>
                                {
                                        years.map((year, index) => {
                                            return <option key={`year${index}`} value={year}>{year}</option>
                                        })
                                }
                                </Form.Select>
                             
                            </Form>
                            </div>
                            
                                <div className="p-4 mb-3 mt-2 bg-light rounded">
                                    <p className="mb-0 fst-italic ">I’ve always believed that you should <b>never, ever give up</b> and you should always <b>keep fighting</b> even when there’s only a slightest chance ~
                                    Michael Schumacher</p>
                                </div>
                           
                        </aside>
                        
                    </div>
                    <div>
                        <Image src={picture} className="img-fluid rounded"/>
                    </div>
            </Container>

        </div>
      );
}
 
export default Main;