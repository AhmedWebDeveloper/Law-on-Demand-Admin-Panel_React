import React from 'react'
import Login from './components/login'
import User from './components/userComp'
import Video from './components/videocomp'
import Contact from './components/contactComp'
import { Route, Switch, Redirect } from "react-router-dom";
function App() {


  return (
    
  
    <Switch>  
    <Route exact path="/login" component={Login} />
    <Route exact path="/user" component={User} />
    <Route exact path="/video" component={Video} />
    <Route exact path="/contact" component={Contact} />
  
    <Redirect exact to="/login" />

    </Switch>
  );
}

export default App;
