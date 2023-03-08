import React from "react";
import Skill from "../Skill";

const skills = ["Python", "Javascript", "HTML", "CSS", "React", "Node", "Rust", "SQL"];


function About() {
    return (
        <main>
            <section>
                <div className="content-div" id="about-content">
                        <div class="skills" id="about-skills">
                            <h2>Skills</h2>
                            <div id="skills-div">
                                {skills.map(skill => <Skill skill={skill} key={skill}></Skill>)}
                            </div>
                        </div>
                    <div className="about-div" id="about-text">
                    <h1>About Me</h1>
                    <p>I'm Neal, an aspiring web developer and current Data Coach based in London, England. I'm currently employed by Multiverse where I teach Data Analytics and Data Science to established professionals looking to upskill. I have over 8 years of experience in using Python for data analysis and have increasingly developed an interest in -- and love of -- programming and building things. In 2022, I decided to take a bootcamp in front-end web development and since then, I've aimed to learn as much as I can about both software and web development.</p>
                    <br/>
                    <p>In addition to Python and the languages and technologies I've learnt on the Web Development bootcamp, I've also been teaching myself Rust and I have experience in and knowledge of SQL. To see examples of these skills, please feel free to take a look at my portfolio or contact me to find out more!</p>
                    </div>
                </div>
            </section>
        </main>
    )
}


export default About;