const mongoose =require('mongoose');
const Schema =mongoose.Schema;

const AdminSchema =new Schema({
    from:{
        type: String,
        required: true,

    },
    to:{
        type: String,
        required: true,

    },
    date:{
        type: String,
        required: true,

    },
    time:{
        type: String,
        required: true,

    },
    classs:{
        type: String,
        required: true,

    },
    price:{
        type: String,
        required: true,

    },
    route:{
        type: String,
        required: true,

    }

});

module.exports = mongoose.model('Admin',AdminSchema);