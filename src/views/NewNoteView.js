import React, {Component} from 'react';
import Link from 'react-router-dom/Link';
import { connect } from 'react-redux';

import { addNote } from '../actions';
import { bindActionCreators } from 'redux';

class NewNoteView extends Component{
    render(){
        return(
            <div>
            <h3>New note for {this.props.match.params.user}</h3>
            <input  placeholder="Your note"/>
            <Link to={`/board/${this.props.match.params.user}`} >
            <br/>
                <button onClick={(e) => {this.props.dispatch(addNote('héhé'))}}>Add this now !</button>
            </Link>
            </div>
        );
    }
}

function mapDispatchToProps(dispatch) {
    return { actions: bindActionCreators(addNote, dispatch) }
  }

  export default connect(mapDispatchToProps)(NewNoteView);