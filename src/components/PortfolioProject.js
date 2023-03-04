import React from "react";

function PortfolioProject(props) {
    return (
        <div className="portfolio-project">
            <h3>{props.projectName}</h3>
            <img src=""/>
            <p>{props.description}</p>
        </div>
    );
}