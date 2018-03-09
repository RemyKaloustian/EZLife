import React, {Component} from 'react';
import Link from 'react-router-dom/Link';


import { deleteNote } from '../actions';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import BoardSubTask from './BoardSubTask';
import {getRandomColor, getRandomColorFromArray} from '../utils/colors';
class BoardTask extends Component {

    constructor(props) {
        super(props);
        this.state = {id: this.props.item.id};
    }
    deleteNote (){
        this.props.dispatch(deleteNote(this.state.id));
    }
    
    
    render() { 

    const color = getRandomColor();
    console.log("color is "+color);
    
        return ( 
            <div className='board-task' style={{backgroundColor: color}}>
                <Link to={`/details/${this.props.user}/${this.props.item.name}`}>
                    <h4 key={this.props.index} className='gotham-light board-title'>{this.props.item.name}</h4>
                    { 
                        this.props.item.subtasks.map((sub, subindex)=>
                        <BoardSubTask key={subindex} name={sub.name} done = {sub.done} className='gotham-thin board-subtask'></BoardSubTask>)
                    }
                </Link>
                <button className='delete-task-btn' onClick={()=> this.deleteNote()}>Delete</button>
            </div>
         );
    }
}

function mapDispatchToProps(dispatch){
    return{
        actions:bindActionCreators(deleteNote, dispatch)
    }
}
 
export default connect(mapDispatchToProps) (BoardTask);