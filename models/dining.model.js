const mongoose = require( 'mongoose' );
const Schema = mongoose.Schema;


const diningSchema = new Schema( {
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

const Dining = mongoose.model( 'Dining', diningSchema, 'dining' );
module.exports = Dining;