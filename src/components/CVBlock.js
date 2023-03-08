import React from "react";

function CVBlock({props}) {
    return (
        <div className="inner-block" id={props.id}>
            <h3>{props.Heading}</h3>
            <h4>{props.Subtitle}</h4>
            <p>{props.Dates}</p>
            <ul>
                <li>{props.First}</li>
                <li>{props.Second}</li>
                <li>{props.Third}</li>
            </ul>
        </div>
    )
}

export default CVBlock;