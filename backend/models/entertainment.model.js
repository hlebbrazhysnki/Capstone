const mongoose = require( 'mongoose' );

const Schema = mongoose.Schema;

const userSchema = new Schema( {
    entertainment: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        minlength: 3
    },
}, {
    timestamps: true,
} );

const entertainment = mongoose.model( 'entertainment', userSchema );

module.exports = entertainment;