import { populate } from "dotenv";
import mongoose from "mongoose";

const messageSchema = new mongoose.Schema({
    senderid:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true
    },
    conversationId:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Conversation",
        required: true
    },
    message:{
        type: String,
        required: true
    },
    profilePic:{
        type:String,
        default: "",
    },
    username:{
        type:String,
        default:''
    }
}, {timestamps: true});//createdAt, updateAt => message.createdAT

const Message = mongoose.model("Message", messageSchema);

export default Message;