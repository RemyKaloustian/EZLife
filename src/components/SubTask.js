import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from 'redux';

import {toggleSubTask} from '../actions';
class SubTask extends Component {

    doSub(){
        let isDone = !this.props.notes[this.props.index].subtasks[this.props.subindex].done
        this.props.dispatch(toggleSubTask(this.props.index, this.props.name, isDone));
    }

    render() { 
        
        return ( 
            <div>
                <p>{this.props.name}</p>
                <p>{`${this.props.notes[this.props.index].subtasks[this.props.subindex].done}`}</p>
                <button onClick={()=> this.doSub()}>Done</button>
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