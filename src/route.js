import React, { Component } from 'react';
import Home from './home';
import Submit from './submit'
import {
    BrowserRouter as Router,
    Route,
    NavLink
} from 'react-router-dom';
import './App.css';
import createBrowserHistory from 'history/createBrowserHistory'

const history = createBrowserHistory();

class Routes extends Component {
    render() {
        return (
            <Router>
                <div className="container">

                    <nav className="navbar navbar-default">
                        <div className="container-fluid">
                            <div className="navbar-header">
                                <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
                                    <span className="sr-only">Toggle navigation</span>
                                    <span className="icon-bar"></span>
                                    <span className="icon-bar"></span>
                                    <span className="icon-bar"></span>
                                </button>
                                <a href="" className="navbar-brand">Project name</a>
                            </div>
                            <div id="navbar" className="navbar-collapse collapse">
                                <ul className="nav navbar-nav">
                                    <li><NavLink exact to="/" activeClassName="activeNav">Home</NavLink></li>
                                    <li><NavLink to="/submit" activeClassName="activeNav" >Submit a Recipie</NavLink></li>
                                </ul>
                            </div>
                        </div>
                    </nav>
                    <Route exact path="/" component={Home} />
                    <Route path="/submit" component={Submit} history={history}/>
                </div>
            </Router>
        );
    }
}

export default Routes;