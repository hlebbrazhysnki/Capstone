import React from 'react'
import "../style.css";

const Contact = () => {
    return (
        <div>
            <h2 className="title center">Contact Us!</h2>
            <div className="container contact-form">
            <form action="submit">
            <h3>Name:</h3>
            <input type="text" placeholder='John Doe' />
            <h3>Email:</h3>
            <input type="text" placeholder='Example123@email.com' />
            <h3>Questions or Comments:</h3>
            <input type="text" placeholder='Question or comments' />
            <br />
            <button className="btn btn-primary my-3">Submit</button>
            </form>
            </div>
        </div>
    )
}

export default Contact
