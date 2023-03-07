import React from "react";

function SectionHeading(props) {
    console.log('section header', props)
    return (
        <div class="section-heading">
            <h2>{props.text}</h2>
        </div>
    )
}

export default SectionHeading;