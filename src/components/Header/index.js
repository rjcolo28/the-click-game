import React from "react";
import "./styles.css";

class Header extends React.Component {
    render() {
        return (
            <div className="jumbotron jumbotron-fluid">
                <div className="container">
                    <h1 className="display-4">Click Bros. Ultimate!</h1>
                    <p className="lead">Click on an image to begin!</p>
                </div>
            </div>
        )
    }
}

export default Header;