import React, { Component } from 'react';
import { connect } from 'react-redux';
import Link from 'react-router-dom/Link';
import BoardTask from '../components/BoardTask';


class Board extends Component{
    render(){

        console.log(this.props.notes);
        return(
            <div>
                <h3 className='gotham-bold'>{this.props.match.params.user}'s board</h3>

                <Link to={`/settings/${this.props.match.params.user}`}>
                    <button>Settings</button>
                </Link>

                <Link to={`/new/${this.props.match.params.user}`}>
                    <button>Add note</button>
                </Link>
                
                {
                    this.props.notes.map((item,index) => 
                        <BoardTask user={this.props.match.params.user}
                            item = {item}
                            index={index}
                        ></BoardTask>
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