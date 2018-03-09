import React, {Component} from 'react';

class BoardSubTask extends Component {
   
    render() { 
        if(!this.props.done){
            return ( <p className='gotham-thin board-subtask'>{this.props.name}</p> );
        }   
        
        return <p></p>;
    }
}
 


export default BoardSubTask;