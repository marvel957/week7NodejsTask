const {Schema,model} = require("mongoose")
const todoSchema = new Schema({
    title:{
        type:String,
        required : true,
        min_length:10,
        max_lenth:50
    },
    description : {
        type:String,
        required : true,
        min_length:30,
        max_lenth:100

    },
},
    {timestamps: true}


);
const todoModel = model('todo',todoSchema);
module.exports = todoModel;