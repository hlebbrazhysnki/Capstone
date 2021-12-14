const mongoose = require( 'mongoose' );
const Schema = mongoose.Schema;


const sportSchema = new Schema( {
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

const Sport = mongoose.model( 'Sport', sportSchema, 'sport' );
module.exports = Sport;