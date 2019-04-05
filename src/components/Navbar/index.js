import React from "react";
import "./styles.css";

class Navbar extends React.Component {
    render() {
        return (
            <nav className="navbar sticky-top navbar-expand-lg navbar-dark bg-dark">
                <a className="navbar-brand" href="/">The Clicky Game</a>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item" id="welcome">
                            <span>Welcome, Challenger!</span>
                        </li>
                        <li className="nav-item">
                            <span>Score: {} | Top Score: {} </span>
                        </li>
                    </ul>
                </div>
            </nav>
        )
    }
}

export default Navbar;