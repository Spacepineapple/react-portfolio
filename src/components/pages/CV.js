import React from "react";
import education from "../cv_education.json";
import experience from "../cv_experience.json";
import projects from "../cv_projects.json";
import hobbies from "../cv_hobbies.json";
import skills from "../skills.json";
import SectionHeading from "../SectionHeading";
import CVBlock from "../CVBlock";

function CV() {
    return (
        <main>
            <section>
                <p>Below you can see my CV including a summary of my experience, education and skills to date. To access a downloadable copy, <a href="/Neal_Reeves_CV.pdf">click here</a> or feel free to visit my LinkedIn profile <a href="https://www.linkedin.com/in/neal-reeves-55a27774/">here</a>. To find out more about my projects, visit my portfolio using the tab above or find me on GitHub <a href="https://github.com/Spacepineapple/">here</a>.</p>
                <div className="cv-area" id="cv">
                    <div className="cv-section" id="skills-section">
                        <SectionHeading text={"Skills"} key={"skills"}/>
                        <div className="cv-div" id="cv-skills">
                            <ul>
                                {/*For each skill in skills, create a list element with the description*/}
                                {skills.map(skill => <li key={`skill-${skill.id}`}>{skill.description}</li>)}
                            </ul>
                        </div>
                    </div>
                    <div className="cv-section" id="projects-section">
                        <SectionHeading text={"Projects"} key={"projects"}/>
                        <div className="cv-div" id="cv-projects">
                            {/*For each project in projects, create a CV block*/}
                            {projects.map(project => <CVBlock props={project} key={`projects-${project.id}`}/>)}
                        </div>
                    </div>
                    <div className="cv-section" id="experience-section">
                        <SectionHeading text={"Experience"} key={"experience"}/>
                        <div className="cv-div" id="cv-experience">
                            {/*For each bit of experience in experience, create a CV block*/}
                            {experience.map(experience => <CVBlock props={experience} key={`experience-${experience.id}`}/>)}
                        </div>
                    </div>
                    <div className="cv-section" id="education-section">
                        <SectionHeading text={"Education"} key={"education"}/>
                        <div className="cv-div" id="cv-education">
                            {/*For each bit of education in education, create a CV block*/}
                            {education.map(education => <CVBlock props={education} key={`education-${education.id}`}/>)}
                        </div>
                    </div>
                    <div className="cv-section" id="hobbies-section">
                        <SectionHeading text={"Hobbies"} key={"hobbies"}/>
                        <div className="cv-div" id="cv-hobbies">
                            <ul>
                                {/*For each hobby in hobbies, create a list elemeent with the description*/}
                                {hobbies.map(hobby => <li key={`hobby-${hobby.id}`}>{hobby.description}</li>)}
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}
 
export default CV;