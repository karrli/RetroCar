import React, { Component } from 'react';
// import logo from './logo.svg';

import 'bootstrap/dist/css/bootstrap.min.css';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


// Pages
import {HomePage} from './Pages/Home/home';
import {Details} from './Pages/Details/Details';
import { NoMatch } from './Pages/NoMatch';
import { Login } from './Pages/Login/login';
import { Layout } from './Components/Shared/Layout';
import {NavBar} from './Components/Shared/NavBar';

//Componenst
//import Navbar from './Components/Shared/Navbar/Navbar';

class App extends Component {
 render () {
   return (
     <React.Fragment>
     <NavBar></NavBar>
     <Layout/>
       <Router>
         <Switch>
           <Route exact path= "/Pages/Home" component={HomePage}/>
           <Route path= "/Pages/Details" component={Details}/>
           <Route path= "/Pages/Login" component={Login}/>
           <Route component = {NoMatch}/>
         </Switch>
       </Router>
     </React.Fragment>
   )
};
}

export default App;