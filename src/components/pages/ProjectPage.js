import React from "react";
import projects from "../projects.json";
import {useParams} from "react-router-dom";

function ProjectPage() {
        let {id} = useParams();
        console.log(id);
        let project = projects.find(project => project.id===id);
        return (
        <main>
            <section>
                <p></p>
                <h1>{project.name}</h1>
                <div className="project-page">
                    <div className="project-info">
                        <div className="project-image-div">
                            <img src={project.image} className="project-image"/>
                        </div>
                        <div className="project-details">
                            <p>{project.description}</p>
                            <p>{project.technologies}</p>
                            <p><a href={project.deployed}/>{project.deployed}</p>
                            <p><a href={project.repository}/>{project.repository}</p>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}

//                    


export default ProjectPage;