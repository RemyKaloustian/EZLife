import React, { Component } from 'react';
import { connect } from 'react-redux';
import Link from 'react-router-dom/Link';



class Board extends Component{
    render(){
        return(
            <div>
                <h3>{this.props.match.params.user}'s board</h3>

                <Link to={`/settings/${this.props.match.params.user}`}>
                    <button>Settings</button>
                </Link>

                <Link to={`/new/${this.props.match.params.user}`}>
                    <button>Add note</button>
                </Link>
                
                {
                    this.props.notes.map((item,index) => 
                        <Link to={`/details/${this.props.match.params.user}/${item.name}`}>
                            <h4 key={index}>{item.name}</h4>
                            { 
                                item.subtasks.map((sub, subindex)=>
                                  <p key={subindex}>{sub}</p>)
                            }

                        </Link>
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