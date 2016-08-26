import React, { PropTypes, Component } from 'react';
import {Link} from 'react-router';

export default class App extends Component{
    constructor(props){
        super(props);
    }

    render(){
        return (
            <div className="App">
                <nav className="navbar navbar-inverse navbar-fixed-top">
                    <div className="container">
                        <div className="navbar-header">
                            <Link to={'/'} className="navbar-brand">Redux Forms</Link>
                        </div>
                    </div>
                </nav>
                <div className="container">
                    {this.props.children}
                </div>
            </div>
        );
    }
}

