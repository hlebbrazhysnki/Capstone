const mongoose = require( 'mongoose' );

const Schema = mongoose.Schema;

const userSchema = new Schema( {
    sports: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        minlength: 3
    },
}, {
    timestamps: true,
} );

const sports = mongoose.model( 'sports', userSchema );

module.exports = sports;