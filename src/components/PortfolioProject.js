import React from "react";

//Create a div holding the name, short description and technologies of the
//project passed to it
function PortfolioProject({project}) {
    return (
        <div className="project-summary">
            <h3>{project.name}</h3>
            <p>{project.short}</p>
            <p>{project.technologies}</p>
        </div>
    );
}

export default PortfolioProject;

//               

