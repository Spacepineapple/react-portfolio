import React from "react";


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

