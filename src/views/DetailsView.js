import React, {Component} from 'react';
import { connect } from 'react-redux';

class DetailsView extends Component{
    constructor(props){
        super(props);
        this.state = {index:this.props.notes.findIndex((note)=> note.name == this.props.match.params.note)};

        
    }

   


    render(){
        console.log(this.props.notes);
        
       

        return(
            <div>
            <h3>{this.props.match.params.note}</h3>
            {
                this.props.notes[this.state.index].subtasks.map((sub, subindex)=>
                                  <p key={subindex}>{sub}</p>)

            }
            </div>
        );
    }
}

function mapStateToProps(state){
    return {
        notes: state.notesReducer,
      };
}

export default connect(mapStateToProps)(DetailsView);
