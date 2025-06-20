const mongoose = require('mongoose');

const dataSchema = new mongoose.Schema({
    Bloodtype: {
        required: true,
        type: String
    },
    location: {
        required: true,
        type: String
    }
})

module.exports = mongoose.model('Request', dataSchema)