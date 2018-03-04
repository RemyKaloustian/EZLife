import React, {Component} from 'react';
import Link from 'react-router-dom/Link';
import { connect } from 'react-redux';

import { addNote } from '../actions';
import { bindActionCreators } from 'redux';

class NewNoteView extends Component{

    constructor(){
        super();
        this.state = {note:''};
    }

    handleChange(e){
        this.setState({note:e.target.value});
    }

    validateNote(){
        if(this.state.note.trim().length > 0){
            this.props.dispatch(addNote(this.state.note));
        }
    }

    render(){
        return(
            <div>
            <h3>New note for {this.props.match.params.user}</h3>
            <input  placeholder="Your note" onChange = {(e)=>this.handleChange(e)}/>
            <Link to={`/board/${this.props.match.params.user}`} >
            <br/>
                <button onClick={(e) => {this.validateNote()}}>Add this now !</button>
            </Link>
            </div>
        );
    }
}

function mapDispatchToProps(dispatch) {
    return { actions: bindActionCreators(addNote, dispatch) }
  }

  export default connect(mapDispatchToProps)(NewNoteView);