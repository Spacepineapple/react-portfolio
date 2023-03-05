import React from "react";

function Publication({project}) {
    return (
        <>
        <h3>{project.title}</h3>
        <p><em>{project.authors}</em></p>
        <p>{project.abstract}</p>
        <p>{project.type}</p>
        </>
    )
}

export default Publication;