import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from 'redux';

import {toggleSubTask} from '../actions';

const TOGGLE_BUTTON_DONE = 'Done';
const TOGGLE_BUTTON_UNDONE = 'Undone';

const TASK_DONE_CLASS = 'task-done';
const TASK_UNDONE_CLASS='task-undone';

class SubTask extends Component {
    constructor(props) {
        super(props);
        let isDone = this.props.notes[this.props.index].subtasks[this.props.subindex].done
        if(isDone){
            this.state = {toggleButton:TOGGLE_BUTTON_UNDONE, classN:TASK_DONE_CLASS};
        }
        else{
            this.state = {toggleButton:TOGGLE_BUTTON_DONE, classN:TASK_UNDONE_CLASS};            
        }
    }    

    doSub(){
        let isDone = !this.props.notes[this.props.index].subtasks[this.props.subindex].done
        this.props.dispatch(toggleSubTask(this.props.index, this.props.name, isDone));
        if(isDone){
            this.setState({toggleButton:TOGGLE_BUTTON_UNDONE, classN:TASK_DONE_CLASS});
        }
        else{
            this.setState({toggleButton:TOGGLE_BUTTON_DONE, classN:TASK_UNDONE_CLASS});        
        }
    }

    render() { 

        return ( 
            <div className='details-subtask' onClick={()=> this.doSub()}>
                <p className={`${this.state.classN}`} >{this.props.name} </p>
            </div>
         )
    }
}

function mapStateToProps(state){
    return {
        notes: state.notesReducer,
      };
}


function mapDispatchToProps(dispatch){
    return {actions: bindActionCreators(toggleSubTask, dispatch)}
}

export default connect(mapStateToProps) (SubTask);