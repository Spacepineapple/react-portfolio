import React from "react";

function PortfolioProject({props}) {
    return (
        <div className="portfolio-project">
            <img src={"/react-portfolio" + props.image}/>
            <h3>{props.name}</h3>
            <p>{props.technologies}</p>
        </div>
    );
}

export default PortfolioProject;