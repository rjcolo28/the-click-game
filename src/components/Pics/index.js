import React from "react";
import "./styles.css";

function Pics(props) {
    return (
        <div className="clickable-image">
            <img alt={props.name} src={props.source} id={props.id} value={props.clicked} onClick={() => {props.handleClicks(); props.handleIncrement()}}></img>
        </div>
    )
    
}

export default Pics;