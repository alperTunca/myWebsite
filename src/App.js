import React from 'react';
import './App.css';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import {
    Route,
    HashRouter,
    Link
} from "react-router-dom";
import Home from "./pages/home";
import Projects from "./pages/projects";


function App() {

    const textStyle = {
        color: "#34A4EB",
        fontSize: "16px",
    };

    return (
        <div className="App bg">
            <HashRouter basename="/">
            <Navbar bg="dark" expand="lg">
                <Navbar.Brand className="ml-2"> <a href="/" style={{color: "#34A4EB", fontSize: "20px"}}>Alper Tunca</a></Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav mr-1" style={{backgroundColor: "#34A4EB"}}/>
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav
                        className="ml-auto mr-2">

                        <Link className="mr-2" to="/" style={textStyle}> Home </Link>
                        <Link to="/projects" style={textStyle}> Projects </Link>
                        {/*
                            <Nav.Link to="/skills" href="/skills" style={textStyle} > Skills </Nav.Link>
                        */}
                    </Nav>
                </Navbar.Collapse>
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

export default App;

