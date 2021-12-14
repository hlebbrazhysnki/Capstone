const mongoose = require( 'mongoose' );
const Schema = mongoose.Schema;


const entertainmentSchema = new Schema( {
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

const Entertainment = mongoose.model( 'Entertainment', entertainmentSchema, 'entertainment' );
module.exports = Entertainment;