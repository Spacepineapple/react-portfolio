import React from "react";
import PortfolioProject from "../PortfolioProject";
import projects from "../projects.json";

function ProjectGallery() {
    console.log(projects);
    return (
        <main>
            <section>
                <h1>Project Gallery</h1>
                <p>Below you can see a selection of programming projects I have completed. Click to see more details about each project including a project description, a link to the GitHub repository for that project and where relevant a link to the deployed project. In addition to the projects below, I have a number of other projects which can be seen on GitHub at <a href="https://github.com/Spacepineapple/">github.com/Spacepineapple</a>.</p>
                <div className="projects">
                    {projects.map(project => <PortfolioProject key={project.id} props={project}/>)}
                </div>
            </section>
        </main>
    );
}

export default ProjectGallery;