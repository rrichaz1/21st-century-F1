import './App.css';
import Navigation from './nav-bar/Navigation';
import Home from './home/Home';
import BasicSpinner from './home/basic-spinner';
import Standings from './standings/Standings';
import StandingsLoader from './standings/StandingsLoader.js';
import Results from './results/Results';
import {
  createHashRouter,
  createRoutesFromElements,
  Outlet,
  Route,
  RouterProvider,
  useNavigation
} from "react-router-dom";
import DriversSearchResults from './standings/Drivers-Search';
import ErrorPage from './error-page';



const RoutesJSX = (
  <Route element={<Layout />}  >
    <Route exact path="/" element={<Home />} index />
    <Route path="standings">
      <Route path=":year" loader={StandingsLoader} element={<DriversSearchResults/>} errorElement={<ErrorPage />}/>
      <Route index element={<Standings />} />
    </Route>
    <Route path="/results" element={<Results />} /> 
  </Route>
);


const routes = createRoutesFromElements(RoutesJSX);

const router = createHashRouter(routes);


function App() {
  return (
    <div className="App">
      
      <RouterProvider router={router} >
      </RouterProvider>
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
