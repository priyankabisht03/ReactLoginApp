import React from 'react';
import './home.css';
import superagent from 'superagent';
import welcomeimage from './welcome.gif' // relative path to image
export class HomePage extends React.Component{
    constructor(){
        super();
        this.state = { };
    }

    
    render(){                
    return(
        <div className="home">
           <img className="welcome_image" src={welcomeimage}/>
        </div>
    )}
}