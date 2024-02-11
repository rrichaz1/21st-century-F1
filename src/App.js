import './App.css';
import Navigation from './nav-bar/Navigation';
import Home from './home/Home';
import Standings from './standings/Standings';
import Results from './results/Results';
import { Routes, Route } from 'react-router-dom';
// import { CarouselItem } from 'react-bootstrap';

function App() {
  return (
    <div className="App">
      <Navigation />
      <Routes>
        <Route path="/standings" element={<Standings />} />
        <Route path="/results" element={<Results />} /> 
        <Route path="/" exact element={<Home />} />
      </Routes>
    </div>
  );
}


export default App;
