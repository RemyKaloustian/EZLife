import React, { Component } from "react";

class SubTask extends Component {
    render() { 
        console.log("In SubTask, name = " + this.props.name);
        console.log("In SubTask, done = " + this.props.done);
        
        return ( 
            <div>
                <p>{this.props.name}</p>
                <p>{`${this.props.done}`}</p>
                <button>Done</button>
            </div>

         )
    }
}


export default SubTask;