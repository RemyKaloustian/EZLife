import React, {Component} from 'react';
import Link from 'react-router-dom/Link';

class NewNoteView extends Component{
    render(){
        return(
            <div>
            <h3>New note for {this.props.match.params.user}</h3>
            <input  placeholder="Your note"/>
            <Link to={`/board/${this.props.match.params.user}`} >
            <br/>
                <button>Add this now !</button>
            </Link>
            </div>
        );
    }
}

export default NewNoteView;