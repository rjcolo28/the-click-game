import React from "react";
import "./styles.css";

function Pics(props) {
    return (
        <div className="clickable-image">
            <img alt={props.name} src={props.source} data-clicked="false"></img>
        </div>
    )
}

export default Pics;