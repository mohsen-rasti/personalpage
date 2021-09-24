import React, { useState } from "react";
import "./App.css";
import { BrowserRouter as Router, Route } from 'react-router-dom';


import login from "./component/login/login";


export default function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path='/login' component ={login} />
        

      </Switch>
      
  
    </Router>
  );
}