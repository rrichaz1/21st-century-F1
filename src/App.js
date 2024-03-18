import './App.css';
import Navigation from './nav-bar/Navigation';
import Home from './home/Home';
import BasicSpinner from './home/basic-spinner';
import Standings from './standings/Standings';
import StandingsLoader from './standings/StandingsLoader.js';
import Results from './results/Results';
<<<<<<< HEAD
import {
  createHashRouter,
  createRoutesFromElements,
  Outlet,
  Route,
  RouterProvider,
  useNavigation
} from "react-router-dom";
import SeasonEndStandings from './standings/SeasonEndStanding';
import ErrorPage from './error-page';



const RoutesJSX = (
  <Route element={<Layout />}  >
    <Route exact path="/" element={<Home />} index />
    <Route path="standings">
      <Route path=":year" loader={StandingsLoader} element={<SeasonEndStandings/>} errorElement={<ErrorPage />}/>
      <Route index element={<Standings />} />
    </Route>
    <Route path="/results" element={<Results />} /> 
  </Route>
);


const routes = createRoutesFromElements(RoutesJSX);

const router = createHashRouter(routes);

=======
import { Routes, Route } from 'react-router-dom';
import DriversSearchResults from './standings/Drivers-Search';
import ResultsSearch from './results/Results-Search';
>>>>>>> 80665f5 (added results api call)

function App() {
  return (
    <div className="App">
<<<<<<< HEAD
      
      <RouterProvider router={router} >
      </RouterProvider>
=======
      <Navigation />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/drivers-standings/:year" element={<DriversSearchResults/>} />
        <Route path="/results/:year" element={<ResultsSearch />} />
        <Route path="/standings" element={<Standings />} />
        <Route path="/results" element={<Results />} /> 
      </Routes>
>>>>>>> 80665f5 (added results api call)
    </div>
  );
}


function Layout() {
  const {state} = useNavigation();
  console.log("Navigation state is " + state);
  return (
    <>
      <Navigation/>
      
      <main>
        {/* 2️⃣ Render the app routes via the Layout Outlet */}
        {
        (state === "loading") ? <BasicSpinner/> :
        <Outlet />}
      </main>
    </>
  );
}

export default App;
