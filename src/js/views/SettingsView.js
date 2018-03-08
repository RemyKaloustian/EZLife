import React, {Component} from 'react';
import Link from 'react-router-dom/Link';

class SettingsView extends Component{
    render(){
        return (
            <div>
                <h3>Settings view</h3>
                <p>The settings</p>
                <Link to={`/board/${this.props.match.params.user}`} >
                    <button>Apply</button>
                </Link>
            </div>
        );
    }
}

export default SettingsView;
