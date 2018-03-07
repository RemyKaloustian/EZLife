import React, {Component} from 'react';
import { connect } from 'react-redux';
import Link from 'react-router-dom/Link';
import { bindActionCreators } from 'redux';

import {addSubTask} from '../actions';
import SubTask from '../components/SubTask';

let self;
class DetailsView extends Component{
    constructor(props){
        super(props);
        this.state = {subtask: '', index:this.props.notes.findIndex((note)=> note.name == this.props.match.params.note)};
        self = this;
    }

    addSub(){
        console.log("In addSub, adding subtask with this.props.match.params.note = " + this.props.match.params.note);
        this.props.dispatch(addSubTask(this.state.index, this.state.subtask));
        this.inputVal.value = '';
    }

    handleInputChange(e){
        this.setState({subtask:e.target.value});
    }


    handleKeyPress(e){
        if(e.charCode == '13'){
            self.addSub();
        }
    }
    render(){      
        return(
            <div>
            <h3>{this.props.match.params.note}</h3>
            <input placeholder="new subtask" 
                onChange={(e)=>this.handleInputChange(e)} 
                ref={el => this.inputVal = el}
                onKeyPress={this.handleKeyPress}/>

            <button onClick= {() => this.addSub()}>Add subtask</button>

            {
                this.props.notes[this.state.index].subtasks.map((sub, subindex)=>
                                  <SubTask key={subindex} name={sub.name} done={sub.done}></SubTask>)

            }
            <Link to={`/board/${this.props.match.params.user}`}>
                <button>Back</button>
            </Link>
            </div>
        );
    }
}

function mapStateToProps(state){
    return {
        notes: state.notesReducer,
      };
}

function mapDispatchToProps(dispatch){
    return {actions: bindActionCreators(addSubTask, dispatch)}
}

export default connect(mapStateToProps)(DetailsView);
