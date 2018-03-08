import React, {Component} from 'react';
import Link from 'react-router-dom/Link';
import { connect } from 'react-redux';
import { Redirect } from 'react-router';

import { addNote } from '../actions';
import { bindActionCreators } from 'redux';

let self ;
class NewNoteView extends Component{

    constructor(){
        super();
        this.state = {note:'', isEnterPressed:false};
        self = this;
    }

    handleChange(e){
        this.setState({note:e.target.value});
    }

    handleKeyPress(e){
        if(e.charCode == '13'){
            self.validateNote();
            self.setState({isEnterPressed:true});
        }
    }

    validateNote(){
        if(this.state.note.trim().length > 0){
            console.log("Adding for " + this.state.note);
            
            this.props.dispatch(addNote(this.state.note));
        }
    }

    render(){
        if(this.state.isEnterPressed){
            return <Redirect push to={`/board/${this.props.match.params.user}`}></Redirect>
        }

        return(
            <div>
            <h3>New note for {this.props.match.params.user}</h3>
            <input  placeholder="Your note"
             onChange = {(e)=>this.handleChange(e)}
             onKeyPress={this.handleKeyPress}/>
             <br/>
            <Link to={`/board/${this.props.match.params.user}`} >
            
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