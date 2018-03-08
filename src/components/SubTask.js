import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from 'redux';

import {toggleSubTask} from '../actions';

const TOGGLE_BUTTON_DONE = 'Done';
const TOGGLE_BUTTON_UNDONE = 'Undone';


class SubTask extends Component {

    constructor(props) {
        super(props);
        let isDone = this.props.notes[this.props.index].subtasks[this.props.subindex].done
        if(isDone){
            this.state = {toggleButton:TOGGLE_BUTTON_UNDONE};
        }
        else{
            this.state = {toggleButton:TOGGLE_BUTTON_DONE};            
        }
    }
    

    doSub(){
        let isDone = !this.props.notes[this.props.index].subtasks[this.props.subindex].done
        this.props.dispatch(toggleSubTask(this.props.index, this.props.name, isDone));
        if(isDone){
            this.setState({toggleButton:TOGGLE_BUTTON_UNDONE});
        }
        else{
            this.setState({toggleButton:TOGGLE_BUTTON_DONE});        
        }
    }

    render() { 
        
        return ( 
            <div>
                <p>{this.props.name}</p>
                <p>{`${this.props.notes[this.props.index].subtasks[this.props.subindex].done}`}</p>
                <button onClick={()=> this.doSub()}>{this.state.toggleButton}</button>
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