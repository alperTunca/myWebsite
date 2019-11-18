import React, {Component} from 'react';
import './App.css';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import {
    HashRouter,
    Route,
    Link
} from "react-router-dom";
import Home from "./pages/home";
import Projects from "./pages/projects";


class App extends Component {
    constructor(props) {
        super(props);
        this.state = {collapse: false};
    }


    toggleNav() {
        console.log("Collapse State : " + this.state.collapse);
            this.setState({
                collapse: !this.state.collapse
            })
    }

    toggleNavCondition() {
        console.log("Collapse State : " + this.state.collapse);
        if (this.state.collapse === true)
        this.setState({
            collapse: !this.state.collapse
        })
    }


    render() {
        const textStyle = {
            color: "#34A4EB",
            fontSize: "16px",
        };

        return (
            <div className="App bg">
                <HashRouter basename="/">
                    <Navbar bg="dark" expand="lg">
                        <Link className="ml-2" to="/" style={{color: "#34A4EB", fontSize: "20px", effect : "true"}} onClick={this.toggleNavCondition.bind(this)} >Alper Tunca</Link>

                        <button aria-controls="basic-navbar-nav mr-1" type="button" aria-label="Toggle navigation"
                                className={"navbar-toggler "+(this.state.collapse ? '' : 'collapsed')} style={{backgroundColor: "#34A4EB"}}
                                onClick={this.toggleNav.bind(this)}>
                            <span className="navbar-toggler-icon"/>
                        </button>

                            <div className ={"navbar-collapse collapse" + (this.state.collapse ? 'show' : '')}>


                            <Nav className="ml-auto mr-2 ">

                                <Link className="mr-2" to="/" style={textStyle}
                                      onClick={this.toggleNavCondition.bind(this)}> Home </Link>
                                <Link className="ml-2" to="/projects" style={textStyle}
                                      onClick={this.toggleNavCondition.bind(this)}> Projects </Link>
                                {/*
                            <Nav.Link to="/skills" href="/skills" style={textStyle} > Skills </Nav.Link>
                        */}
                            </Nav>

                            </div>

                    </Navbar>


                    <Route exact path="/">
                        <Home/>
                    </Route>
                    <Route path="/projects">
                        <Projects/>
                    </Route>
                    {/*
                    <Route path="/skills">
                        <Skills/>
                    </Route>
                */}
                </HashRouter>
            </div>
        );

    }
}

export default App;

