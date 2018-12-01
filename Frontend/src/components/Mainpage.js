import React from 'react';
import './Mainpage.css';

import {BrowserRouter as Router, Route, Link} from "react-router-dom";

// import { Manager, Reference, Popper } from 'react-popper';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../../node_modules/bootstrap/dist/js/bootstrap.min.js';

import {SignIn} from './signin/SignIn';
import {SignUp} from './signUp/SignUp';
import {HomePage} from './home/home';

export const Mainpage = ()=>{
    return(
        <div className="container">
            <div className="inner-container">
            <Router>
                <div className="router-div">
                <div className="tab-view">
                    <ul>
                        <li className="signin-li">
                            <Link to="/">Home</Link>
                        </li>
                        <li className="signup-li active">
                            <Link to="/signup">SignUp</Link>
                        </li>
                        <li className="signin-li">
                            <Link to="/signin">SignIn</Link>
                        </li>
                    </ul>
                    <Route exact path="/" component={HomePage} />
                    <Route exact path="/signup" component={SignUp} />
                    <Route exact path="/signin" component={SignIn} />

                </div>
            </div>    
            </Router>    

            </div>
        </div>
    );
}