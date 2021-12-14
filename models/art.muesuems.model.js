const mongoose = require( 'mongoose' );

const Schema = mongoose.Schema;

const userSchema = new Schema( {
     
    name: {
        type: String
    },
    description: {
        type: String
    },
    imageURL: {
        type: String
    },
    website: {
        type: String
    }
});

const Art = mongoose.model( 'Art', userSchema, 'art');

module.exports = Art;