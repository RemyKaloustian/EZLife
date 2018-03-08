import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from 'redux';

import {doSubTask} from '../actions';
class SubTask extends Component {

    doSub(){
        this.props.dispatch(doSubTask(this.props.index, this.props.name));
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
    return {actions: bindActionCreators(doSubTask, dispatch)}
}


export default connect(mapStateToProps) (SubTask);