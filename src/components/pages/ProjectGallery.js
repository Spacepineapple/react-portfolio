import React from "react";
import PortfolioProject from "../PortfolioProject";
import projects from "../projects.json";

function ProjectGallery() {
    console.log(projects);
    return (
        <main>
            <section>
                <h1>Project Gallery</h1>
                <div className="projects">
                    {projects.map(project => <PortfolioProject key={project.id} props={project}/>)}
                </div>
            </section>
        </main>
    );
}

export default ProjectGallery;