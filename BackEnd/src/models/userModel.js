const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        reuired: true,
    },
    blood: {
        type: String,
        reuired: true,
    }
});

module.exports = mongoose.model('User', UserSchema);