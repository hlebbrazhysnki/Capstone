const mongoose = require( 'mongoose' );

const Schema = mongoose.Schema;

const AttractionSchema = new Schema( {
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
    }}
    );

const Attraction = mongoose.model( 'Attraction', AttractionSchema, 'attraction' );

module.exports = Attraction;