import React from "react";

//Create a div holding the text of the skill passed to the component
function Skill(props) {
    return (
        <div className="skill">
            <h5>{props.skill}</h5>
        </div>
    )
}

export default Skill;