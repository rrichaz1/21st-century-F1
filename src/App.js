import logo from './logo.svg';
import './App.css';
import Navigation from './nav-bar/Navigation';
import Home from './home/Home';
import Standings from './standings/Standings';
import Results from './results/Results';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/standings" element={<Standings />} />
        <Route path="/results" element={<Results />} /> 
      </Routes>
    </div>
  );
}

export default App;
