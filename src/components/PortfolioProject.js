import React from "react";

function PortfolioProject({props}) {
    return (
        <div className="portfolio-project">
            <h3>{props.name}</h3>
            <img className="project-image" src={"/react-portfolio" + props.image}/>
            <p>{props.technologies}</p>
        </div>
    );
}

export default PortfolioProject;