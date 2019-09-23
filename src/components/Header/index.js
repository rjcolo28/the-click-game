import React from "react";
import "./styles.css";

class Header extends React.Component {
    render() {
        return (
            <div className="jumbotron jumbotron-fluid">
                <div className="container">
                <a href="https://fontmeme.com/super-smash-bros-font/"><img src="https://fontmeme.com/permalink/190923/041beb59c52d75b13d9daf33a2b89d58.png" alt="super-smash-bros-font" border="0"></img></a>
                <h2>Click on an image to begin!</h2>
                </div>
            </div>
        )
    }
}

export default Header;