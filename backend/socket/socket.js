import { Server } from "socket.io";
import http from 'http';
import express from "express";

const app = express();

const server = http.createServer(app);
const io = new Server(server, {
    cors:{
        origin:["http://localhost:3000"],
        methods:["GET", "POST"]
    },
})



io.on("connection", (socket) =>{
  console.log("a user connected",socket.id);

  socket.on("join_room", (data) => {
    socket.join(data);
    console.log(`user with id: ${socket.id} joined room ${data}`);
  })

//   socket.on("send_message", (messageData) => {
//     // Broadcast the message to others in the same room
//     const messagePayload = {
//         room: messageData.room,
//         message: messageData.message,
//         sender: {
//             _id: messageData.sender._id,
//             username: messageData.sender.username,
//             profilePic: messageData.sender.profilePic,
//         },
//         createdAt: new Date(),  // Assuming you want to add the timestamp here
//     };
//     socket.to(messageData.room).emit("receive_message", messagePayload);
// });

  socket.on("send_message", (data) => {
    socket.to(data.room).emit("receive_message", data)
  })

  socket.on('user_update', (updatedUser) => {
    io.emit('user_update', updatedUser);
  });

  socket.on("diconnect", () => {
    console.log("User Disconnected", socket.id);
  })
});


export {app,io,server};