import mongoose from "mongoose";

const userSchema = new mongoose.Schema ({
    username:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true,
        minlength:6
    },
    gender:{
        type:String,
        required:true,
        enum: ["male","female"]
    },
    profilePic:{
        type:String,
        default: ""
    }
    // cretedAT, UpdateAT
},{timestamps: true});

const user = mongoose.model("user", userSchema);

export default user;