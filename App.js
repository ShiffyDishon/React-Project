// // import logo from './logo.svg';
// // import './App.css';


// import React from 'react';
// import './App.css';

// function App() {
//   return(
//       <div className="App">
//      </div>
//   )
// }


// // function App() {
// //   return (
// //     <div className="App">
// //       <header className="App-header">
// //         <img src={logo} className="App-logo" alt="logo" />
// //         <p>
// //           Edit <code>src/App.js</code> and save to reload.
// //         </p>
// //         <a
// //           className="App-link"
// //           href="https://reactjs.org"
// //           target="_blank"
// //           rel="noopener noreferrer"
// //         >
// //           Learn React
// //         </a>
// //       </header>
// //     </div>
// //   );
// // }

// export default App;


import 'bootstrap/dist/css/bootstrap.min.css';
import $ from 'jquery';
import Popper from 'popper.js';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import { Navbar, Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';


import logo from './logo.svg';
import React, { useState, useEffect } from 'react'
import LogIn from '../src/components/Login'
import MyApp from '../src/components/myApp'
import { BrowserRouter as Router, Switch, Link, Route, useHistory } from 'react-router-dom'
import { Redirect } from 'react-router'

import './App.css';


function App(props) {
  let history = useHistory()
  useEffect(() => {
    history.push("/LogIn");
  }, []);

  return (
    <div className="app">
      <Switch >
        <Route path="/LogIn">
          <LogIn />
        </Route>
        <Route path="/users/:userId">
          <MyApp />
        </Route>
      </Switch>
    </div>
  );
}

export default App;

