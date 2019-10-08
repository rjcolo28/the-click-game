import React from "react";
import "./styles.css";

function Titlebar(props) {
    return (
        <nav className="navbar sticky-top navbar-expand-lg navbar-dark bg-dark">
            <a className="navbar-brand" href="/">The Clicky Game</a>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                    <li>
                        <span>Welcome, Challenger!</span>
                    </li>
                    <li className="nav-item">
                        <span>Score: {props.score} | Top Score: {props.totalScore} </span>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default Titlebar;