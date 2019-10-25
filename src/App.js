import React from 'react';
import './App.css';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import {
    BrowserRouter as Router,
    Route
} from "react-router-dom";
import Home from "./pages/home";
import Projects from "./pages/projects";
import Skills from "./pages/skills";


function App() {

    const textStyle = {
        color: "#34A4EB",
        fontSize: "16px"
    };

    return (
        <div className="App bg">
            <Navbar bg="dark" expand="lg">
                <Navbar.Brand className="ml-2"> <a href="/" style={{color: "#34A4EB", fontSize: "20px"}}>Alper Tunca</a></Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav mr-1" style={{backgroundColor: "#34A4EB"}}/>
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav
                        className="ml-auto mr-2">

                        <Nav.Link to="/" href="/" style={textStyle}> Home </Nav.Link>
                        <Nav.Link to="/projects" href="/projects" style={textStyle}> Projects </Nav.Link>
                        {/*
                            <Nav.Link to="/skills" href="/skills" style={textStyle} > Skills </Nav.Link>
                        */}
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
            <Router>
                <Route exact path="/">
                    <Home/>
                </Route>
                <Route path="/projects">
                    <Projects/>
                </Route>
                <Route path="/skills">
                    <Skills/>
                </Route>

            </Router>
        </div>
    );

}

export default App;

