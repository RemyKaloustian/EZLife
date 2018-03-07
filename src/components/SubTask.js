import React, { Component } from "react";

class SubTask extends Component {

    doSubtask(){
        console.log("Doing subtask for task "+ this.props.index);
    }

    render() { 
        console.log("In SubTask, name = " + this.props.name);
        console.log("In SubTask, done = " + this.props.done);
        
        return ( 
            <div>
                <p>{this.props.name}</p>
                <p>{`${this.props.done}`}</p>
                <button onClick={()=> this.doSubtask()}>Done</button>
            </div>

         )
    }
}


export default SubTask;