import React, {useState} from "react";
import {MenuItems} from './MenuItems';
import {Link} from 'react-router-dom';
import './Navbar.css';
import {Button} from "./Button";

function Navbar() {

    const [click, setClick] = useState(false)

    const handleClick = () => setClick(!click);

    return (
        <nav data-testid="navbar-test-id" className="NavbarItems">
            <h1 className="navbar-logo">Stainley Lebron <i className="fab fa-react"/></h1>
            <div data-testid = "click-icon" className="menu-icon" onClick={handleClick}>
                <i className={click ? 'fas fa-times' : 'fas fa-bars'}/>
            </div>
            <ul className={click ? 'nav-menu active' : 'nav-menu'}>
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

export default Navbar;
