const mongoose = require( 'mongoose' );

const Schema = mongoose.Schema;

const ContactSchema = new Schema( {
    name: {
        type: String
    },
    email: {
        type: String
    },

    comment: {
        type: String
    }}
    );

const Contact = mongoose.model( 'Contact', ContactSchema, 'contact' );

module.exports = Contact;