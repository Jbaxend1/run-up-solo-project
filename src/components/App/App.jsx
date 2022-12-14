import React, { useEffect } from 'react';
import {
  HashRouter as Router,
  Redirect,
  Route,
  Switch,
} from 'react-router-dom';

import { useDispatch, useSelector } from 'react-redux';

import Nav from '../Nav/Nav';
import Footer from '../Footer/Footer';

import ProtectedRoute from '../ProtectedRoute/ProtectedRoute';

import './App.css';
import AboutPage from '../AboutPage/AboutPage';
import UserPage from '../UserPage/UserPage';
import InfoPage from '../InfoPage/InfoPage';
import LandingPage from '../LandingPage/LandingPage';
import LoginPage from '../LoginPage/LoginPage';
import RegisterPage from '../RegisterPage/RegisterPage';
import BeforeEngine from '../BeforeEngine/BeforeEngine';
import Taxi from '../Taxi/Taxi';
import RunUp from '../RunUp/RunUp';
import Takeoff from '../Takeoff/Takeoff';
import Complete from '../Complete/Complete';
import EditChecklist from '../EditChecklist/EditChecklist';
import EditBefore from '../EditBefore/EditBefore';
import EditTaxi from '../EditTaxi/EditTaxi';
import EditRunup from '../EditRunup/EditRunup';
import EditTakeoff from '../EditTakeoff/EditTakeoff';
import EditAircraft from '../EditAircraft/EditAircraft';
import AircraftDetail from '../AircraftDetail/AircraftDetail';

function App() {
  const dispatch = useDispatch();

  const user = useSelector(store => store.user);

  useEffect(() => {
    dispatch({ type: 'FETCH_USER' });
  }, [dispatch]);

  return (
    <Router>
      <div>
        <Nav />
        <Switch>
          {/* Visiting localhost:3000 will redirect to localhost:3000/home */}
          <Redirect exact from="/" to="/home" />

          {/* Visiting localhost:3000/about will show the about page. */}
          <Route
            // shows AboutPage at all times (logged in or not)
            exact
            path="/about"
          >
            <AboutPage />
          </Route>

          {/* For protected routes, the view could show one of several things on the same route.
            Visiting localhost:3000/user will show the UserPage if the user is logged in.
            If the user is not logged in, the ProtectedRoute will show the LoginPage (component).
            Even though it seems like they are different pages, the user is always on localhost:3000/user */}
          <ProtectedRoute
            // logged in shows UserPage else shows LoginPage
            exact
            path="/user"
          >
            <UserPage />
          </ProtectedRoute>

          <ProtectedRoute
            // logged in shows InfoPage else shows LoginPage
            exact
            path="/info"
          >
            <InfoPage />
          </ProtectedRoute>

          <Route
            exact
            path="/login"
          >
            {user.id ?
              // If the user is already logged in, 
              // redirect to the /user page
              <Redirect to="/user" />
              :
              // Otherwise, show the login page
              <LoginPage />
            }
          </Route>

          <Route
            exact
            path="/registration"
          >
            {user.id ?
              // If the user is already logged in, 
              // redirect them to the /user page
              <Redirect to="/user" />
              :
              // Otherwise, show the registration page
              <RegisterPage />
            }
          </Route>

          <Route
            exact
            path="/home"
          >
            {user.id ?
              // If the user is already logged in, 
              // redirect them to the /user page
              <Redirect to="/user" />
              :
              // Otherwise, show the Landing page
              <LandingPage />
            }
          </Route>
          <Route exact path="/before-engine">
              <BeforeEngine />
          </Route>
          <Route exact path="/taxi">
            <Taxi />
          </Route>
          <Route exact path="/run-up">
            <RunUp />
          </Route>
          <Route exact path="/takeoff">
            <Takeoff />
          </Route>
          <Route exact path="/complete">
            <Complete />
          </Route>
          <Route exact path="/edit-checklist">
            <EditChecklist />
          </Route>
          <Route exact path="/edit-before-engine">
            <EditBefore />
          </Route>
          <Route exact path="/edit-taxi">
            <EditTaxi />
          </Route>
          <Route exact path="/edit-run-up">
            <EditRunup />
          </Route>
          <Route exact path="/edit-takeoff">
            <EditTakeoff />
          </Route>
          <Route exact path="/edit/aircraft/:id">
            <EditAircraft />
          </Route>
          <Route exact path="/detail/:craftId">
            <AircraftDetail />
          </Route>

          {/* If none of the other routes matched, we will show a 404. */}
          <Route>
            <h1>404</h1>
          </Route>
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
