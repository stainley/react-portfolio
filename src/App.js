import './App.css';
import Home from "./component/home/Home";
import Navbar from "./component/Navbar/Navbar";
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import About from "./component/about/About";
import Portfolio from "./component/portfolio/Portfolio";
import {Component} from "react";

class App extends Component {

    componentDidMount() {
        fetch(process.env.REACT_APP_API_URL)
            .then(response => response.json())
            .then(users => this.setState({ users }));
    }

    render() {

        const personalInformation = {
            "headline": "Title",
            "description": "Description to be complete"
        };

        const envValue = process.env.REACT_APP_ENV;

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
                                description={personalInformation.description}
                                headline={personalInformation.headline}
                            />
                        </Route>
                        <Route path="/portfolio">
                            <Portfolio environment={envValue} />
                        </Route>
                    </Switch>
                </Router>
            </div>
        );
    }
}

export default App;
