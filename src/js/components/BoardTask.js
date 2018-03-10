// Module imports
import React, {Component} from 'react';
import Link from 'react-router-dom/Link';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

// File imports
import { deleteNote } from '../actions';
import BoardSubTask from './BoardSubTask';
import {getRandomColor, getRandomColorSecondary} from '../utils/colors';

//A task diplayed on Board View
class BoardTask extends Component {

    constructor(props) {
        super(props);
        this.state = {id: this.props.item.id};
    }

    deleteNote (){
        this.props.dispatch(deleteNote(this.state.id));
    }    
    
    render() { 
        return ( 
            <div className='board-task' style={{backgroundColor: getRandomColor()}}>
                <Link to={`/details/${this.props.user}/${this.props.item.name}`}>
                    <h4 key={this.props.index} className='gotham-light board-title'>{this.props.item.name}</h4>
                    { 
                        this.props.item.subtasks.map((sub, subindex)=>
                        <BoardSubTask key={subindex} name={sub.name} done = {sub.done} className='gotham-thin board-subtask'/>)
                    }
                </Link>
                <button className='delete-task-btn' style={{backgroundColor: getRandomColorSecondary()}} onClick={()=> this.deleteNote()}><img src='src/assets/icons/delete.png'/></button>
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