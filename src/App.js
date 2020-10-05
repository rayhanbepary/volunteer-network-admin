import React, { createContext, useState } from 'react';
import './App.css';
import { Switch, Route, Link } from "react-router-dom";
import AddEvent from './Components/AddEvent/AddEvent';
import VolunteersList from './Components/VolunteersList/VolunteersList';
import Login from './Components/Login/Login';
import PrivateRoute from './Components/PrivateRoute/PrivateRoute';
import Error from './Components/Error/Error';



export const userContext = createContext();

function App() {

  const [loggedInUser, setLoggedInUser] = useState({});

  return (
    <userContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <Switch>
        <PrivateRoute exact path="/">
          <VolunteersList></VolunteersList>
        </PrivateRoute>
        <PrivateRoute exact path="/volunteersList">
          <VolunteersList></VolunteersList>
        </PrivateRoute>
        <PrivateRoute exact path="/addEvent">
          <AddEvent></AddEvent>
        </PrivateRoute>
        <Route exact path="/login">
          <Login></Login>
        </Route>
        <Route exact path="*">
          <Error></Error>
        </Route>
      </Switch>
    </userContext.Provider>
    
  );
}

export default App;
