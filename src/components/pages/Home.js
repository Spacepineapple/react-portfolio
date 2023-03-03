import React from "react";
import portrait from "../../images/NealPhoto.jpg";

function Home() {
    return (
        <main>
            <section>
                <div class="content-div" id="profile-content">
                        <img src={portrait} class="portrait"/>
                        <p>Hello and welcome to my personal portfolio page! My name
                        is Neal Reeves and I'm an aspiring web developer currently based in
                        London, England. I have a background in academic research
                        focused on the design and implementation of large-scale
                        volunteer crowdsourcing projects that facilitate and support
                        scientific research (<emph>citizen science</emph>). On
                        this page, you can find a description of my skills, links to
                        previous programming projects I have completed and links to
                        my relevant social media pages if you wish to contact
                        me.</p>
                </div>
                </section>
        </main>
    );
}

export default Home;