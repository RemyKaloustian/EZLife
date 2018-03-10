// Module imports
import React, {Component} from 'react';
import Link from 'react-router-dom/Link';

// File imports
import {getRandomColor} from '../utils/colors';

class SettingsView extends Component{
    render(){
        return (
            <div>
                <div className='header-panel' style={{backgroundColor: getRandomColor()}}>
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
