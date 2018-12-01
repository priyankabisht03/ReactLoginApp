import React from 'react';
import './SignUp.css';
import superagent from 'superagent';
export class SignUp extends React.Component{
    constructor(){
        super();
        this.state = {
            username: '',
            pwd: '',
            repwd: '',
            email: '',
            users: [],
        };        
    }
    handleUsernameChange(event){
        this.setState({username: event.target.value});
    }
    handlePasswordChange(event){
        this.setState({pwd: event.target.value});
    }
    handleRePasswordChange(event){
        this.setState({repwd: event.target.value});
    }    
    handleEmailChange(event){
        this.setState({email: event.target.value});
    }
    handleSubmit(event){
        event.preventDefault();
        if( this.state.email != "" && this.state.username != "" && this.state.pwd != "" && this.state.repwd != ""){
            if( this.state.pwd == this.state.repwd){
                superagent.post('/signup')
                .send({ name: this.state.username, pwd: this.state.pwd, email: this.state.email})     
                .set('Accept', 'application/json')
                .then(res => {
                    alert(res.body.msg);
                }); 
            }else{
                alert("Passwords don't match");
            }
        }else{
            alert("Please Enter all the details");
        }
    }
    
    render(){        
    return(
        <div className="signIn">
            <form action="#" className="formFields" onSubmit={this.handleSubmit.bind(this)} noValidate>
                <div className="formField">
                    <label htmlFor="username" className="label">Full Name</label>
                    <input type="text" id="username" className="input" placeholder="Enter your name" name="username" onChange={this.handleUsernameChange.bind(this)} value={this.state.username} required/>
                </div>
                <div className="formField">
                    <label htmlFor="email" className="label">Email</label>
                    <input type="email" id="email" className="input" placeholder="Enter your email" name="email" onChange={this.handleEmailChange.bind(this)} value={this.state.email} required/>
                   
                </div>
                <div className="formField">
                    <label htmlFor="pwd" className="label">Password</label>
                    <input type="password" id="pwd" className="input" placeholder="Enter your password" name="pwd" onChange={this.handlePasswordChange.bind(this)} value ={this.state.pwd} required/>
                </div>
                <div className="formField">
                    <label htmlFor="repwd" className="label">Re-enter Password</label>
                    <input type="password" id="repwd" className="input" placeholder="Re-Enter your password" name="pwd" onChange={this.handleRePasswordChange.bind(this)} value ={this.state.repwd} required/>
                </div>            
                <div className="formField">
                    
                    <button id="btn" className="btn" name="Submit">SignUp</button>
                </div>
            </form>
        </div>
    )}
}