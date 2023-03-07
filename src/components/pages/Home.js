import React from "react";
import portrait from "../../images/NealPhoto.jpg";

function Home() {
    return (
        <main>
            <section>
                <div className="content-div" id="profile-content">
                        <img src={portrait} className="portrait"/>
                        <div className="description-div" id="profile-description">
                            <h1>Welcome</h1>
                            <p>Hello and welcome to my personal portfolio page! My name is Neal Reeves and I'm an aspiring web developer currently based in London, England. On this personal site, you can find a description of my skills and experience, links to previous programming projects I have completed and information on how to contact.</p>
                        </div>
                </div>
            </section>
        </main>
    );
}

export default Home;