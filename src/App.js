import './App.css';
import Home from "./component/home/Home";
import Navbar from "./component/Navbar/Navbar";
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import About from "./component/about/About";
import Portfolio from "./component/portfolio/Portfolio";
import React from "react";

function App() {
    return (
        <div className="App">
            <Router>
                <Navbar/>
                <Switch>
                    <Route path="/home">
                        <Home/>
                    </Route>
                    <Route path="/about">
                        <About/>
                    </Route>
                    <Route path="/portfolio">
                        <Portfolio/>
                    </Route>
                </Switch>
            </Router>
        </div>
    );
}

export default App;
