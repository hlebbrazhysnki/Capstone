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
} );

const shopping = mongoose.model( 'shopping', userSchema, 'shopping' );

module.exports = shopping;