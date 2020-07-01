import React from "react";
import { Link } from "react-router-dom";
import { Navbar, Nav } from "react-bootstrap";
import "./App.css";
import Routes from "./Routes";

function App() {
    return (
        <div className="App container">
            <Navbar bg="light">
                <Navbar.Brand>
                    <Link to="/">Scratch</Link>
                </Navbar.Brand>
                <Navbar.Toggle />

                <Navbar.Collapse>
                    <Nav>
                        <Nav.Link href="/signup">Signup</Nav.Link>
                        <Nav.Link href="/login">Login</Nav.Link>
                    </Nav> 
                </Navbar.Collapse>
            </Navbar>
            <Routes />
        </div>
    );
}

export default App;