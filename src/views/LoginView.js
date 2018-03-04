import React, { Component } from 'react';
import Link from 'react-router-dom/Link';


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
            <input placeholder='type your login' onChange={(e) => {this.handleChange(e)}} ref= {(input)=> this.logInput = input}/>
            <br/>
            <Link to='/board/ee'>
                <button disabled = {!this.state.login}>Go on !</button>
            </Link>
        </div>
    );
}

}

export default LoginView;