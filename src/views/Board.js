import React, { Component } from 'react';
import { connect } from 'react-redux';
import Link from 'react-router-dom/Link';



class Board extends Component{
    render(){
        return(
            <div>
                <h3>{this.props.match.params.user}'s board</h3>
                <Link to={`/new/${this.props.match.params.user}`}>
                    <button>Add note</button>
                </Link>
                
                {
                    this.props.notes.map((item,index) => 
                        <p key={index}>{item.name}</p>
                    )
                }
            </div>
        );
    }
}


//THIS IS WHERE WE CHOOSE the reducer we want to display
function mapStateToProps(state){
    return {
      notes: state.notesReducer,
    };
  }

  export default connect(mapStateToProps)(Board);