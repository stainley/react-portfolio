import React, {Component} from "react";
import {MenuItems} from './MenuItems';
import {Link} from 'react-router-dom';
import './Navbar.css';
import {Button} from "./Button";

export default class Navbar extends Component {

    state = {clicked: false}

    handleClick = () => {
        this.setState({clicked: !this.state.clicked})
    }

    render() {
        return (
            <nav data-testid="navbar" className="NavbarItems">
                <h1 className="navbar-logo">Stainley Lebron <i className="fab fa-react"/></h1>
                <div className="menu-icon" onClick={this.handleClick}>
                    <i className={this.state.clicked ? 'fas fa-times' : 'fas fa-bars'}/>
                </div>
                <ul className={this.state.clicked ? 'nav-menu active' : 'nav-menu'}>
                    {MenuItems.map((item, index) => {
                        return (
                            <li key={index}>
                                <Link to={item.url} className={item.cName}>
                                    {item.title}
                                </Link>
                            </li>
                        );
                    })}
                </ul>
                <Button>Sign Up</Button>
            </nav>
        );
    }
}
