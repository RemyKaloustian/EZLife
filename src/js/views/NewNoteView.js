// Module imports
import React, {Component} from 'react';
import Link from 'react-router-dom/Link';
import { connect } from 'react-redux';
import { Redirect } from 'react-router';
import { bindActionCreators } from 'redux';

// File imports
import { addNote } from '../actions';
import { getRandomColor } from '../utils/colors';
import '../../css/newnote.css';

let self ;//Is used so we can have access to this.setState() in functions with events params
//The view displayed when we create a new note
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
            this.props.dispatch(addNote(this.state.note));
        }
    }

    render(){
        //If we pressed enter, we go to the board
        if(this.state.isEnterPressed){
            return <Redirect push to={`/board/${this.props.match.params.user}`}></Redirect>
        }

        return(
            <div>
                <div className='header-panel' style={{backgroundColor: getRandomColor()}}>
                     <h3 className='header-title'>New note for {this.props.match.params.user}</h3>
                </div>
                <div className='page-content flex-column'>
                   
                    <input  placeholder="Your note" className='full-input input'
                            onChange = {(e)=>this.handleChange(e)}
                            onKeyPress={this.handleKeyPress}/>
                    <br/>

                    <Link to={`/board/${this.props.match.params.user}`} 
                            className='validate-button' style={{backgroundColor: getRandomColor()}}
                            onClick={(e) => {this.validateNote()}}>
                            <img src='src/assets/icons/check.png'/>                        
                    </Link>
                </div>
            </div>
        );
    }
}

function mapDispatchToProps(dispatch) {
    return { actions: bindActionCreators(addNote, dispatch) }
  }

  export default connect(mapDispatchToProps)(NewNoteView);