import './App.css';
import Home from "./component/home/Home";
import Navbar from "./component/Navbar/Navbar";
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import About from "./component/about/About";
import Portfolio from "./component/portfolio/Portfolio";
import React, {useEffect, useState} from "react";

function App() {

    const description = "dasdasdasd";
    const headLine = "HeadLING";
    const [state, setState] = useState(null);


    return (
        <div className="App">
            <Router>
                <Navbar />
                <Switch>
                    <Route path="/home">
                        <Home/>
                    </Route>
                    <Route path="/about">
                        <About
                            description={description}
                            headline={headLine}
                            />
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
