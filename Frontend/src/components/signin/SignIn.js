import React from 'react';
import './SignIn.css';
import superagent from 'superagent';
export class SignIn extends React.Component{
    constructor(){
        super();
        this.state = {
            email: '',
            pwd: '',
            users: [],
        };
    }
    handleUsernameChange(event){
        this.setState({email: event.target.value});        
    }
    handlePasswordChange(event){
        this.setState({pwd: event.target.value});
    }
    handleSubmit(event){
        event.preventDefault(); 
        let regex = /^([a-zA-Z0-9_\.\-\+])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
       if( this.state.email  && regex.test(this.state.email) && this.state.pwd ){
            superagent.post('/signin')
            .send({ email: this.state.email, pwd: this.state.pwd})     
            .set('Accept', 'application/json')
            .then(res => {
                alert(res.body.msg);
            });
        }else{
            alert("Please check your credentials properely!");
        }       
              
    }

    
    render(){                
    return(
        <div className="signIn">
            <form action="#" className="formFields" onSubmit={this.handleSubmit.bind(this)} noValidate>
                <div className="formField">
                    <label htmlFor="username" className="label">Email</label>
                    <input type="text" id="username" className="input" placeholder="Enter your email" name="username" onChange={this.handleUsernameChange.bind(this)} value={this.state.email} required/>
                </div>
                <div className="formField">
                    <label htmlFor="pwd" className="label">Password</label>
                    <input type="password" id="pwd" className="input" placeholder="Enter your password" name="pwd" onChange={this.handlePasswordChange.bind(this)} value ={this.state.pwd} required/>
                </div>
                <div className="formField">
                    
                    <button id="btn" className="btn" name="Submit">SignIn</button>
                </div>
            </form>
        </div>
    )}
}