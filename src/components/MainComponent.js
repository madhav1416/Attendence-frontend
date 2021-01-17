import React, { useEffect, useState } from "react";
import Header from "./HeaderComponent";
import SideNavbar from './SideNavbar';
import Employee from './TeacherComponent';
import Student from './StudentComponent';
import Login from "./Login";
import Signup from './Signup';
import { Route , Switch ,Redirect,BrowserRouter} from 'react-router-dom';
import axios from 'axios';
import '../css/Main.css';
function Main() {
    return(
        <>
        <BrowserRouter>
    <Redirect push to="/login"/>
    <Switch>
      <Route path="/login" component={() =><Login/>}/>
      <Route path="/signup" component={() =><Signup/>}/>
      { JSON.parse(localStorage.getItem('user')) && <Route path="/dashboard"
          render={() =>
                  <React.Fragment>
                    <Header/>
                     <div className="main">
                       <SideNavbar/>
                       <Employee />
                     </div>
                   </React.Fragment>
                  }
    />}
    { JSON.parse(localStorage.getItem('user')) && <Route path="/student"
          render={() =>
                  <React.Fragment>
                    <Header/>
                     <div className="main">
                       <SideNavbar/>
                       <Student />
                     </div>
                   </React.Fragment>
                  }
    />}
    </Switch>
    </BrowserRouter>
        </>
    )
}

export default Main;