import React, { Component } from 'react';


class LoginView extends Component{

    constructor(){
        super();
        this.state = {login:''}
    }

    handleChange(e){
        this.setState({login: e.target.value});
    }

render(){
    return(
        <div>
            <h3>Login view</h3>
            <input placeholder="type your login" onChange={(e) => {this.handleChange(e)}} ref= {(input)=> this.logInput = input}/>
            <br/>
            <button disabled = {!this.state.login}>Go on !</button>
        </div>
    );
}

}

export default LoginView;