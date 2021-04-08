import React, {Component} from "react";
import {MenuItems} from './MenuItems';

import './Navbar.css';

export default class Navbar extends Component {

    state = { clicked: false}

    handleClick = () => {
        this.setState({ clicked: !this.state.clicked })
    }


    render() {
        return (
            <nav className="NavbarItems">
                <h1 className="navbar-logo">React <i className="fab fa-react"></i></h1>
                <div className="menu-icon" onClick={this.handleClick}>
                    <i className={this.state.clicked? 'fas fa-time' : 'fas fa-bars'}></i>
                </div>
                <ul>
                    {MenuItems.map((item, index) => {
                        return(
                            <li><a className={item.cName} href={item.url}>{item.title}</a></li>
                        );
                    })}

                </ul>
            </nav>
        );
    }
}
