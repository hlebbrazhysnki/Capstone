const mongoose = require( 'mongoose' );

const Schema = mongoose.Schema;

const userSchema = new Schema( {
    nightlife: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        minlength: 3
    },
}, {
    timestamps: true,
} );

const nightlife = mongoose.model( 'nightlife', userSchema );

module.exports = nightlife;