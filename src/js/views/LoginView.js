// Module imports
import React, { Component } from 'react';
import Link from 'react-router-dom/Link';
import { Redirect } from 'react-router';

let self; // Is used so we can have access to this.setState in function with events params 
// The login view, home page
class LoginView extends Component{
    
    constructor(){
        super();
        this.state = {login:'', isEnterPressed:false}
        self = this;
    }

    handleChange(e){
        this.setState({login: e.target.value});
    }   

    handleKeyPress(e){        
        if(e.charCode == 13){            
            self.setState({isEnterPressed:true});
        }
    }

    render(){
        //If we pressed enter, redirecting to the board
        if(this.state.isEnterPressed == true){         
            return <Redirect push to={`/board/${this.state.login}`}></Redirect>
        }
        return(
            <div>
                <h3>Login view</h3>
                <input placeholder='type your login' 
                        onChange={(e) => {this.handleChange(e)}} ref= {(input)=> this.logInput = input}
                        onKeyPress={this.handleKeyPress}/>
                <br/>
                <Link to={`/board/${this.state.login}`}>
                    <button disabled = {!this.state.login}>Go on !</button>
                </Link>
            </div>
        );
    }
}

export default LoginView;