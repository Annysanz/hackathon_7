const mongoose = require("mongoose")
const { Schema } = mongoose


const schemaTask = new Schema({
    title : {type: String , required: true},
    description : {type: String , required: true},
    checked : {type: Boolean , default: false},
    points : {type: Number , required: true}
});

module.exports = mongoose.model('task', schemaTask)