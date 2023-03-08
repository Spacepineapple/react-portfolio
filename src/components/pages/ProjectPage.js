import React from "react";
import projects from "../projects.json";
//Import the useParams hook
import {useParams} from "react-router-dom";

function ProjectPage() {
        //Get the id from the placeholder at the end of the URL
        let {id} = useParams();
        let project = projects.find(project => project.id===id);
        return (
        <main>
            <section>
                <p></p>
                <h1>{project.name}</h1>
                <div className="project-page">
                    <div className="project-info">
                        <div className="project-image-div">
                            <img src={project.image} className="project-image" alt={`Screenshot of ${project.name} interface`}/>
                        </div>
                        <div className="project-details">
                            <p>{project.description}</p>
                            <p>{project.technologies}</p>
                            <p><a href={project.deployed}>{project.deployed}</a></p>
                            <p><a href={project.repository}>{project.repository}</a></p>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}

//                    


export default ProjectPage;