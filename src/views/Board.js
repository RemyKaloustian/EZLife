import React, { Component } from 'react';



class Board extends Component{
    render(){
        return(
            <div>
                <h3>{this.props.match.params.user}'s board</h3>
                <p>List of tasks</p>
            </div>
        );
    }
}

export default Board;