const mongoose = require( 'mongoose' );

const Schema = mongoose.Schema;

const userSchema = new Schema( {
    category: { type: String, required: true },
    description: { type: String, required: true },
    url: { type: String, required: true },
    location: { type: String, required: true },
}, {
    timestamps: true,
} );

const All = mongoose.model( 'All', allSchema );

module.exports = All;