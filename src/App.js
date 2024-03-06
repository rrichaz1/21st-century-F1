import './App.css';
import Navigation from './nav-bar/Navigation';
import Home from './home/Home';
import Standings from './standings/Standings';
import Results from './results/Results';
import { Routes, Route } from 'react-router-dom';
import DriversSearchResults from './standings/Drivers-Search';

function App() {
  return (
    <div className="App">
      <Navigation />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/drivers-standings/:year" element={<DriversSearchResults/>} />
        <Route path="/standings" element={<Standings />} />
        <Route path="/results" element={<Results />} /> 
      </Routes>
    </div>
  );
}


export default App;
