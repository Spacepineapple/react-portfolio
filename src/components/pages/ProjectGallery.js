import React from "react";
import PortfolioProject from "../PortfolioProject";
import projects from "../../data/projects.json";
import { Link } from "react-router-dom";
import ProjectPage from "./ProjectPage";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function ProjectGallery() {
    return (
        <main>
            <section>
                <h1>Project Gallery</h1>
                <p>Below you can see a selection of programming projects I have completed. Click to see more details about each project including a project description, a link to the GitHub repository for that project and where relevant a link to the deployed project. In addition to the projects below, I have a number of other projects which can be seen on GitHub at <a href="https://github.com/Spacepineapple/">github.com/Spacepineapple</a>.</p>
                <div className="projects">
                    {/*For each project in projects*/}
                    {projects.map(project => {
                    //Create a link to a URL with the unique project id
                    return (<Link to={`/project/${project.id}`} key={project.id+"link"}>
                    <Routes>
                        {/*Create a route with a placeholder id element on the end of the URL*/}
                        <Route path="/project/:id" element={<ProjectPage/>}  />
                    </Routes>
                    <div className="project-block">
                        <div className="project-preview-div">
                            <img className="project-preview" src={project.image} alt={`Screenshot of ${project.name} interface`}/>
                        </div>
                        {/*Create a PortfolioProject component for the project*/}
                        <PortfolioProject key={project.id} project={project}/>
                    </div>
                    </Link>)
                    })}
                </div>
            </section>
        </main>
    );
}

export default ProjectGallery;