import React, { Component } from 'react';
import { connect } from 'react-redux';



class Board extends Component{
    render(){
        return(
            <div>
                <h3>{this.props.match.params.user}'s board</h3>
                <p>List of tasks</p>
                {
                    this.props.notes.map((item,index) => 
                        <p key={index}>{item}</p>
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