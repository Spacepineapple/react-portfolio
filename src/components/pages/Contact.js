import React from "react";
import CommentForm from "../CommentForm";

function Contact() {
    return (
        <main>
            <section>
                <h1>Contact</h1>
                <p>You can contact me via:</p>
                    <ul>
                        <li key="linkedIn">LinkedIn: </li>
                        <li key="gitHub">GitHub: </li>
                        <li key="email">Email: </li>
                    </ul>
                <p>Or add a comment using the form below:</p>
                <CommentForm/>
            </section>
        </main>
    );
}

export default Contact;