const mongoose = require("mongoose");

const msgSchema = new mongoose.Schema({
    id : {
        type: String,
        required: true
    },
    gender : {
        type : String,
        required: true
    },
    date : {
        type : String
    },
    day : {
        type : String
    },
    hour : {
        type : String
    },
    message : {
        type : String,
        required : true
    }
})

const Message = new mongoose.model('Message', msgSchema);

module.exports = Message;