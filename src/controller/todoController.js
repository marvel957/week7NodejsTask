const Task = require("../model/TODO")
// Create a user
exports.createTask = async (req,res) =>{
    try {
        let task = await req.body;
        let created = await Task.create(task);
        if (!created) return res.status(400).json({
            success:false,
            message:'task not created'
        })
        return res.status(201).json({
            success: true,
            message:'task registered successfully',
            task:created,

        })
        
    } catch (error) {
        res.status(500).json({
            Success:'false',
            message:"Internal server error",
            error:error.message
        })
        
    }
}

//get all users

exports.retreiveAllTasks = async (req,res) =>{
    try {
        let tasks = await Task.find();
        if (users.length === 0){
            return res.status(404).json({
                success : false,
                message : "No task was found"
            })
        }
        res.status(200).json({
            Success:true,
            message: "Tasks found",
            tasks,
            count: tasks.length,
        })
        
    } catch (error) {
        res.status(500).json({
            Success:'false',
            message:"Internal server error",
            error:error.message
        })
        
    }
}

//get single task
exports.getTask = async(req,res) =>{
    try {
        let id = { _id:req.params.id };
        let task = await Task.findOne(id);
        if (!user){
            return res.status(404).json({
                success : false,
                message : "Task not found"
            })

        }
        res.status(200).json({
            Success:true,
            message: "task found",
            task,
        })
        
    } catch (error) {
        res.status(500).json({
            Success:'false',
            message:"Internal server error",
            error:error.message
        })
        
    }
}
//update user
exports.updateTask = async(req,res) =>{
    try {
        let id = {_id:req.params.id}
        let task = await req.body
        let update = await Task.findOneAndUpdate(id,task,{new:true});
        if (!update) return res.status(400).json({
            success:false,
            message:'task not updated',

        })
        return res.status(200).json({
            success:true,
            message:'Task updated',
            task:update

        })


        
    } catch (error) {
        res.status(500).json({
            Success:'false',
            message:"Internal server error",
            error:error.message
        })
        
    }
}

// delete user
exports.deleteTask = async (req,res) => {
    try {
        let id = {_id: req.params.id};
        let deleted = await Task.findOneAndRemove(id);
        if (!deleted) return res.status(400).json({
            success:false,
            message:'task not deleted',

        })
        return res.status(200).json({success:true,message:"task deleted successfully"})
        
    } catch (error) {
        res.status(500).json({
            Success:'false',
            message:"Internal server error",
            error:error.message
        })
        
    }
}