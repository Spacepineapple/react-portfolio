import React from "react";
import CommentForm from "../CommentForm";

function Contact() {
    return (
        <main>
            <section>
                <h1>Contact</h1>
                <p>You can contact me via:</p>
                    <ul>
                        <li key="linkedIn">LinkedIn: <a href="https://www.linkedin.com/in/neal-reeves-55a27774/">https://www.linkedin.com/in/neal-reeves-55a27774/</a></li>
                        <li key="gitHub">GitHub: <a href="https://github.com/Spacepineapple/">https://github.com/Spacepineapple/</a></li>
                        <li key="email">Email: <a href="mailto:neal.t.reeves@gmail.com">neal.t.reeves@gmail.com</a></li>
                    </ul>
                <p>Or add a comment using the form below:</p>
                <CommentForm/>
            </section>
        </main>
    );
}

export default Contact;