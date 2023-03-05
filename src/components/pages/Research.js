import React, { Fragment } from "react";
import {useParams, Link} from "react-router-dom";
import projects from "../research.json";
import SectionHeading from "../SectionHeading";
import Publication from "../Publication";

let years = []
projects.map(project => project.year).filter(year => {
    if (!(years.includes(year))) {
        years.push(year);
    }
});

function Research() {
    return (
        <main>
            <section>
                <h1>Research</h1>
                <p>During my PhD and as a former academic researcher, I produced a number of research publications. These publications predominantly concerned online citizen science, the engagement of volunteers in the scientific research process as well as crowdsourcing. This domain is characterised by a high level of inequality in the number of contributions made by different volunteers with a marked power law or long-tail effect as a small number of volunteers make up the vast majority of contributions. A major focus of my research was how to design and implement platforms to encourage participation from volunteers.</p>
                <div className="research">
                    {years.map((year) => {
                    return(<div className="year-block" key={year+"block"}>
                        <SectionHeading text={year} key={year+"heading"}/>
                        <div className="year-papers" key={year+"papers"}>
                            {projects.filter((project) => project.year===year).map((project) => {
                            console.log(project);
                            return (<Fragment key={project.id}><Publication project={project} key={project.id}/>
                            <Link to={`/research/${project.id}`} key={project.id+"link"}>
                                <p key={project.id+"link-text"}>More Details</p>
                            </Link>
                            </Fragment>)})}
                        </div>
                    </div>
                )}
                )}
                </div>
            </section>
        </main>
    );

}

export default Research;