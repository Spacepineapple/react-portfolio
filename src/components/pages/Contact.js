import React from "react";

function Contact() {
    return (
        <main>
            <section>
                <h1>Contact</h1>
                <p>You can contact me via:</p>
                    <ul>
                        <li key="linkedIn" className="contact-option">LinkedIn: <a href="https://www.linkedin.com/in/neal-reeves-55a27774/">https://www.linkedin.com/in/neal-reeves-55a27774/</a></li>
                        <li key="gitHub" className="contact-option">GitHub: <a href="https://github.com/Spacepineapple/">https://github.com/Spacepineapple/</a></li>
                        <li key="email" className="contact-option">Email: <a href="mailto:neal.t.reeves@gmail.com">neal.t.reeves@gmail.com</a></li>
                    </ul>
            </section>
        </main>
    );
}

export default Contact;