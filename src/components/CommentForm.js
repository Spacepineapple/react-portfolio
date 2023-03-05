import React, {Component} from "react";
import { useState } from "react";


class CommentForm extends Component {
    state = {
        firstName: "",
        surname: "",
        comment: ""
    };

    handleInputChange = event => {
    // Getting the value and name of the input which triggered the change
        const { name, value } = event.target;

        // Updating the input's state
        this.setState({
            [name]: value
        });
    };
    
    addComment = event => {
        // Preventing the default behavior of the form submit (which is to refresh the page)
        event.preventDefault();

        // Alert the user their first and last name, clear `this.state.firstName` and `this.state.lastName`, clearing the inputs
        alert(`Comment Received:
        Name: ${this.state.firstName} ${this.state.surname}
        Comment: ${this.state.comment}`);
        this.setState({
            firstName: "",
            surname: "",
            comment: ""
        });
    };
    
    render() {
        return (
            <div className="comment-form">
                <input
                    id="first-name"
                    type="text"
                    name="firstName"
                    value={this.state.firstName}
                    onChange={this.handleInputChange} 
                />
                
                <input
                    id="surname"
                    type="text"
                    name="surname"
                    value={this.state.surname}
                    onChange={this.handleInputChange} 
                />
                
                <input
                    id="comment"
                    type="text"
                    name="comment"
                    value={this.state.comment}
                    onChange={this.handleInputChange} 
                />
                <button onClick={this.addComment}>Add Comment</button>
            </div>
        
    )};
};

export default CommentForm;