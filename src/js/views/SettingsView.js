import React, {Component} from 'react';
import Link from 'react-router-dom/Link';

class SettingsView extends Component{
    render(){
        return (
            <div>
            <div className='header-panel'>
                <h3 className='header-title'>Settings view</h3>
            </div>
                <div className='page-content alternative-content'>
                    <p>The settings</p>
                    <Link to={`/board/${this.props.match.params.user}`} >
                        <button>Apply</button>
                    </Link>
                </div>
            </div>
        );
    }
}

export default SettingsView;
