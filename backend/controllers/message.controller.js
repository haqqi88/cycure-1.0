import mongoose from "mongoose";
import Conversation from "../models/conversation.model.js";
import Message from "../models/message.model.js";
import User from '../models/user.model.js'; // Import the User model
import {io} from "../socket/socket.js";

// Register the User model with Mongoose
mongoose.model('User', User.schema);

export const sendMessage = async (req,res) => {
    try {
        const {message} = req.body;
        const {id: conversationId } = req.params;
        const senderid = req.user._id;
        const profilePic = req.user.profilePic;
        const username = req.user.username;

        let conversation = await Conversation.findById(conversationId);

        if (!conversation) {
            return res.status(404).json({ error: 'Conversation not found' });
          }

        const newMessage = new Message({
            senderid,
            conversationId,
            message,
            profilePic,
            username,
        })

        conversation.messages.push(newMessage._id);

        await Promise.all([conversation.save(), newMessage.save()]).catch((error)=>{
            console.error('error saving conversation:', error.message);
        })
        
        io.to(conversationId).emit("newMessage", newMessage);

        res.status(201).json(newMessage);
    } catch (error) {
        console.log("error in sendmessage controller: ", error.message);
        res.status(500).json({error: "Internal server error"});
    }
}

export const getMessage = async (req, res) => {
    try {
        const {id}= req.params;

        const conversation = await Conversation.findById(id).populate('messages');
        if (!conversation) return res.status(404).json({ error: 'Conversation not found' });

        const messagesWithGroupId = conversation.messages.map((message) => {
            return {
              ...message.toObject(),
              groupId: id// Add groupId field
            };
          });
        
        res.status(200).json(messagesWithGroupId);
    } catch (error) {
        console.log("error in getmessage controller: ", error.message);
        res.status(500).json({error: "Internal server error"});
    }
}