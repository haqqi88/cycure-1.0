import mongoose, { model } from "mongoose";
import Conversation from "../models/conversation.model.js";

export const getConversation = async(req,res) =>{
    try {
        const allConversation = await Conversation.find();

        res.status(200).json(allConversation);

    } catch (error) {
        console.log("error in getConversation: ", error.message);
        res.status(500).json({error: "Internal server error"});
    }
}

