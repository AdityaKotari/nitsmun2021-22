import { lazy, Suspense } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import './App.css';
import Loading from "./components/Loading";

const Home = lazy(() => import('./components/screens/Home'));
const History = lazy(() => import('./components/screens/History'));
const Team = lazy(() => import('./components/screens/Team'));
const Error404 = lazy(() => import('./components/screens/Error404'));
const AnnualConference = lazy(() => import('./components/screens/AnnualConference'));

const Navbar = lazy(() => import('./components/Navbar'));
const Footer = lazy(() => import('./components/Footer'));

const About = lazy(() => import("./components/screens/About"));
const Articles = lazy(() => import("./components/screens/Articles"));

function App() {
  return (
    <Router>
      <Suspense fallback={<Loading/>}>
        <div className="App">
        
          <Navbar/> {/**Navbar stays for all pages**/}

          <Switch>

            {/*Home*/}
            <Route exact path="/">
              <Home
                title="NITS MUN"
              />
            </Route>

            {/*History*/}
            <Route exact path="/history">
              <History
                title="History - NITS MUN"
              />
            </Route>

            {/* Articles */}
            <Route exact path="/articles">
              <Articles
                title="Articles - NITS MUN"
              />
            </Route>

            {/* About US */}
            <Route exact path="/about">
              <About
                title="About - NITS MUN"
              />
              
            </Route>

            {/*Secretariat*/}
            <Route exact path="/team">
              <Team
                title="Secretariat - NITS MUN"
              />
            </Route>

            {/*Events*/}
              {/*Annnual Conference*/}
            <Route exact path="/events/annual-conference">
              <AnnualConference
                title="Annual Conference - NITS MUN"
              />
            </Route>

            {/*404*/}
            <Route path="/">
              <Error404
                title="Error 404 - NITS MUN"
              />
            </Route>

          </Switch>

          <Footer/> {/* Footer stays for all pages */}
      
        </div>
      </Suspense>
    </Router>

  );
}

export default App;
