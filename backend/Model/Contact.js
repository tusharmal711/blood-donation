const mongoose = require('mongoose');

const dataSchema = new mongoose.Schema({
    fullname: {
        required: true,
        type: String
    },
    phoneno: {
        required: true,
        type: Number
    },
    email: {
        required: true,
        type: String
    },
    inquiryType: {
        required: true,
        type: String
    },
     subject: {
        required: true,
        type :String
    },
    message: {
        required: true,
        type :String
    },
    
})

module.exports = mongoose.model('Contact', dataSchema)