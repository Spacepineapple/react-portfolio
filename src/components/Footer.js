import React from "react";

function Footer() {
    return (
        <footer>
            <h3>&copy; Neal Reeves, 2023</h3>
            <div className="icon-div">
                <a href="mailto:neal.t.reeves@gmail.com"><img className="icon" src="/react-portfolio/images/email.png"/></a>
                <a href="https://github.com/Spacepineapple/"><img className="icon" src="/react-portfolio/images/github-icon.png"/></a>
                <a href="https://www.linkedin.com/in/neal-reeves-55a27774/"><img className="icon" src="/react-portfolio/images/linkedin-icon.png"/></a>
                <a href="https://scholar.google.co.uk/citations?user=XFLPi5IAAAAJ&hl=en"><img className="icon" src="/react-portfolio/images/scholar-icon.png"/></a>
            </div>
        </footer>
    );
}

export default Footer;