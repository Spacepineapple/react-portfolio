import React, {Component} from "react";


class CommentForm extends Component {
    //Initialise the state for each input as an empty string
    state = {
        firstName: "",
        surname: "",
        comment: ""
    };

    //Create functionality to update input
    handleInputChange = event => {
    // Get the value and name of the input which triggered the change
        const { name, value } = event.target;

        // Update that input's value to be the new value
        this.setState({
            [name]: value
        });
    };
    
    //Create functionality to add a comment
    addComment = event => {
        //Prevent the page from refreshing and information being lost
        event.preventDefault();

        //Alert the user that their comment has been received and show them their comment
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
                <fieldset>
                    {/*Create a text input for the user's first name*/}
                    <div className="form-section" id="first-name-section">
                        <label htmlFor="first-name">First Name</label>
                        <input
                            id="first-name"
                            type="text"
                            name="firstName"
                            value={this.state.firstName}
                            onChange={this.handleInputChange} 
                        />
                    </div>
                    {/*Create a text input for the user's surname*/}
                    <div className="form-section" id="surname-section">
                    <label htmlFor="surname">Surname</label>
                    <input
                        id="surname"
                        type="text"
                        name="surname"
                        value={this.state.surname}
                        onChange={this.handleInputChange} 
                    />
                    </div>
                    {/*Create a text input for the user's comment*/}
                    <div className="form-section" id="comment-section">
                    <label htmlFor="comment">Comment</label>
                    <input
                        id="comment"
                        type="text"
                        name="comment"
                        value={this.state.comment}
                        onChange={this.handleInputChange}
                        size="30vw"
                    />
                    </div>
                    <button onClick={this.addComment}>Add Comment</button>
                </fieldset>
            </div>
        
    )};
};

export default CommentForm;