import React from "react";
import "./styles.css";

function Pics(props) {
    return (
        <div className="clickable-image">
            <img alt={props.name} src={props.source} id={props.id} clicked={props.clicked} onClick={props.handleClicks}></img>
        </div>
    )
    
}

export default Pics;