import React, {Component} from 'react';
import Link from 'react-router-dom/Link';

class BoardTask extends Component {
    
    render() { 
        return ( 
            <Link to={`/details/${this.props.user}/${this.props.item.name}`}>
                            <h4 key={this.props.index}>{this.props.item.name}</h4>
                            { 
                                this.props.item.subtasks.map((sub, subindex)=>
                                  <p key={subindex}>{sub}</p>)
                            }

                        </Link>

         );
    }
}
 
export default BoardTask;