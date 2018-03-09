import React, { Component } from 'react';
import { connect } from 'react-redux';
import Link from 'react-router-dom/Link';
import BoardTask from '../components/BoardTask';
import '../../css/board.css';
import {getRandomColor} from '../utils/colors';
const DISPLAY_COLUMN = 'flex-column';
const DISPLAY_ROW = 'flex-row';

class Board extends Component{

    constructor(props) {
        super(props);
        this.state = {display:DISPLAY_COLUMN};
    }

    changeDisplay(){
        if(this.state.display === DISPLAY_COLUMN){
            this.setState({display: DISPLAY_ROW});
        }
        else if(this.state.display === DISPLAY_ROW){
            this.setState({display:DISPLAY_COLUMN});
        }
    }
    

    render(){

        console.log(this.props.notes);
        return(
            <div >
                <div className='header-panel header-panel-board' style={{backgroundColor: getRandomColor()}}>
                    <h3>📋{this.props.match.params.user}'s board</h3>
                    <Link to={`/settings/${this.props.match.params.user}`}>
                        <button>Settings</button>
                    </Link>
                    
                </div>
              
               <div className={`page-content ${this.state.display}`}>
                {
                    this.props.notes.map((item,index) => 
                        <BoardTask user={this.props.match.params.user}
                            item = {item}
                            index={index}
                        ></BoardTask>
                    )
                }
                </div>

                <div className='fixed-bottom'>
               
                    <button onClick={()=> this.changeDisplay()}>Layout</button>
                    <Link to={`/new/${this.props.match.params.user}`}>
                        <button>Add note</button>
                    </Link>
                
                </div>
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