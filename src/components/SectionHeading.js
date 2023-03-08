import React from "react";

//Create a div holding the text passed to it
function SectionHeading(props) {
    return (
        <div className="section-heading">
            <h2>{props.text}</h2>
        </div>
    )
}

export default SectionHeading;