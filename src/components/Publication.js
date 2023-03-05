import React from "react";

function Publication(props) {
    return (
        <>
        <h3>{props.title}</h3>
        <p>{props.authors}</p>
        <p>{props.type}</p>
        </>
    )
}

export default Publication;