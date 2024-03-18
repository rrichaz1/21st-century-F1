import "./Results.css";
import Container from 'react-bootstrap/Container';
import Breadcrumb from 'react-bootstrap/Breadcrumb';
import Image from 'react-bootstrap/Image';
import pic from './results2.jpg';
import ResultSelect from './Results-Select';

const Main = () => {
    return ( 
        <div>
            <div className="jumbotron jumbotron-results py-5">
                <Container className="container-fluid">
                    <h1 className="display-4 fw-bold text-white text-start">Results</h1>
                </Container>
            </div>

            <Container>
                <Breadcrumb className="custom-background">
                    <Breadcrumb.Item active>Home</Breadcrumb.Item>
                    <Breadcrumb.Item active>Results</Breadcrumb.Item>
                </Breadcrumb>

                    <div className="row">
                        <div className="col-lg-8">
                            <p className="text-start">
                            Since the year 2000, there have lots of Grand Prix champions. It takes effort from the driver, 
                            principal, engineers, pit stop crew and countless other individuals to land on the top step of the podium. To win 
                            a Grand Prix, you need to be the fastest and the smartest driver on the grid on that day. You need to be able to 
                            adapt to the conditions and make the right calls at the right time. Achieving that and winning a Grand Prix 
                            immortalizes you in the history books. Here you can see all of those who did just that in the 21st century.
                            </p>
                        </div>

                        <aside className="col-lg-4">

                        <ResultSelect />
                            <div className="p-4 mb-3 mt-2 bg-light rounded">
                                <p className="mb-0 fst-italic ">I always try to get the best result out of it, I'm not there to just sit second or sit third.  
                                <b> I'm a winner</b>, and I want to win every single race, and <b>I will always go for it</b> ~ Max Verstappen</p>
                            </div>
                        </aside>
                    </div>
                    <div>
                        <Image src={pic} className="img-fluid rounded"/>
                    </div>
            </Container>
        </div>
     );
}
 
export default Main;