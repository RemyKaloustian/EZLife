// Module imports
import React, {Component} from 'react';

// A sub task displayed in the Board View
class BoardSubTask extends Component {
   
    render() { 
        // We dipsplay only undone subtasks in Board View
        if(!this.props.done){
            return ( <p className='gotham-thin board-subtask'>{this.props.name}</p> );
        }           
        return <p></p>;
    }
}

export default BoardSubTask;