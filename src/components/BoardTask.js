import React, {Component} from 'react';
import Link from 'react-router-dom/Link';


import { deleteNote } from '../actions';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

class BoardTask extends Component {

    constructor(props) {
        super(props);
        this.state = {id: this.props.item.id};
    }
    deleteNote (){
        this.props.dispatch(deleteNote(this.state.id));
    }
    
    
    render() { 
        return ( 
            <div>
                <Link to={`/details/${this.props.user}/${this.props.item.name}`}>
                                <h4 key={this.props.index}>{this.props.item.name}</h4>
                                { 
                                    this.props.item.subtasks.map((sub, subindex)=>
                                    <p key={subindex}>{sub}</p>)
                                }
                </Link>
                <button onClick={()=> this.deleteNote()}>Delete</button>
            </div>
         );
    }
}

function mapDispatchToProps(dispatch){
    return{
        actions:bindActionCreators(deleteNote, dispatch)
    }
}
 
export default connect(mapDispatchToProps) (BoardTask);