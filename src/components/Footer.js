import React from "react";

function Footer() {
    return (
        <footer>
            <p>&copy; Neal Reeves, 2023</p>
            <div className="icon-div">
                <a href="mailto:neal.t.reeves@gmail.com"><img className="icon" src="/react-portfolio/images/email.png" alt="Email envelope icon"/></a>
                <a href="https://github.com/Spacepineapple/"><img className="icon" src="/react-portfolio/images/github-icon.png" alt="Github octocat icon"/></a>
                <a href="https://www.linkedin.com/in/neal-reeves-55a27774/"><img className="icon" src="/react-portfolio/images/linkedin-icon.png" alt="Linkedin logo icon"/></a>
                <a href="https://scholar.google.co.uk/citations?user=XFLPi5IAAAAJ&hl=en"><img className="icon" src="/react-portfolio/images/scholar-icon.png" alt="Google Scholar icon"/></a>
            </div>
        </footer>
    );
}

export default Footer;