import React, { Component } from 'react';


class LoginView extends Component{

render(){
    return(
        <div>
            <h3>Login view</h3>
            <input placeholder="type your login" />
            <br/>
            <button>Go on !</button>
        </div>
    );
}

}

export default LoginView;