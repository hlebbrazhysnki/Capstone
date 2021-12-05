const mongoose = require( 'mongoose' );

const Schema = mongoose.Schema;

const userSchema = new Schema( {
    mmuseums: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        minlength: 3
    },
}, {
    timestamps: true,
} );

const mmuseums = mongoose.model( 'museums', userSchema );

module.exports = museums;