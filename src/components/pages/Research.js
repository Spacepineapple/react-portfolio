import React from "react";
import {useParams} from "react-router-dom";

function Research() {
    return (
        <main>
            <section>
                <h1>Research</h1>
                <p>During my PhD and as a former academic researcher, I produced a number of research publications. These publications predominantly concerned online citizen science, the engagement of volunteers in the scientific research process as well as crowdsourcing. This domain is characterised by a high level of inequality in the number of contributions made by different volunteers with a marked power law or long-tail effect as a small number of volunteers make up the vast majority of contributions. A major focus of my research was how to design and implement platforms to encourage participation from volunteers.</p>
                <div className="research">
                    {projects.map(project => {
                    console.log(project)
                    return (<Link to={`/research/${project.id}`}>
                    <Routes>
                        <Route path="/research/:id" element={<ProjectPage/>}  />
                    </Routes>
                    <Publication key={project.id} props={project}/>
                    </Link>)
                    })}
                </div>
            </section>
        </main>
    );

}

export default Research;