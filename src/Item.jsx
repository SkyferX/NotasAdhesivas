import React from "react";
import "./style.css"

function Item(props) {

    const noteClass = props.important ? "note-important" : "note-normal";

    return(
        <div className="col">
            <div className={`${noteClass}`}>
                <p className="title">{props.tarea}</p>
                <p className="desc">{props.description}</p>
            </div>
        </div>
    );
}

export default Item;