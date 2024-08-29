import mongoose from "mongoose";

const conversationSchema = new mongoose.Schema({
    participants:[{
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
    }],
    mesages:[{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Message",
        default: [],
    }],
    messages:[{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Message",
        default: [],
    }],
    name:[{
        type: String,
        default: '',
    }]
},{timestamps: true});

const Conversation = mongoose.model("Conversation", conversationSchema);

export default Conversation;