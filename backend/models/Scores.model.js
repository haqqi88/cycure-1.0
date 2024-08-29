import mongoose, { Types } from "mongoose";

const scoresSchema = new mongoose.Schema({
    userId:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
    },
    pretest:{
        type: Number,
        required:true,
    },
    postest1:{
        type: Number,
        required:true,
    },
    postest2:{
        type: Number,
        required:true,
    },
    postest3:{
        type: Number,
        required:true,
    },
   
},{timestamps: true});

const Scores = mongoose.model("Scores", scoresSchema);

export default Scores;