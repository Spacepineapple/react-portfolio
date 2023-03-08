import React from "react";
import projects from "../../data/research.json";
import SectionHeading from "../SectionHeading";
import Publication from "../Publication";

let years = []
//Loop through projects, get the unique years and add to years
projects.map(project => project.year).forEach(year => {
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
                    {/*For each year in years*/}
                    {years.map((year) => {
                    /*Create a div for that year to contain the relevant row of information*/
                    return(<div className="year-block" id={"block"+year} key={year+"block"}>
                        {/*Create a SectionHeading component for that year*/}
                        <SectionHeading text={year} key={year+"heading"}/>
                        {/*Create a div to hold the papers for that year */}
                        <div className="year-papers" key={year+"papers"} id={`year-${year}`}>
                            {/*Filter the projects to return only those which match the selected year*/}
                            {projects.filter((project) => (project.year===year)).map((project) => {
                            /*Return a div that holds a Publication component and a link to find out more*/
                            return (<div key={project.id} id={`paper-${project.id}`}>
                                <Publication project={project} key={project.id}/>
                                <p key={project.id+"link-text"}><a href={project.link}>More Details</a></p>
                            </div>)})}
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