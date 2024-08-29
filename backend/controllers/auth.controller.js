import User from "../models/user.model.js";
import bcryp from "bcryptjs"
import generateTokenAndAetCookie from "../utils/generateToken.js";
import user from "../models/user.model.js";

export const signup = async (req, res) => {
    try{
        const {username,password,confirmPassword,gender} = req.body;

        if(password !== confirmPassword){
            return res.status(400).json({error:"Password don't match"})
        }

        const user = await User.findOne({username});

        if(user){
            return res.status(400).json({error:"Username already exists"})
         }

         // Hash password here
         const salt = await bcryp.genSalt(10);
         const hashedPassword = await bcryp.hash(password, salt);
         
         //https://avatar.iran.liara.run

         const boyProfilePic =`https://avatar.iran.liara.run/public/boy?username=${username}`
         const girlProfilePic =`https://avatar.iran.liara.run/public/girl?username=${username}`

         const newUser = new User({
            username,
            password : hashedPassword,
            gender,
            profilePic: gender === "male" ? boyProfilePic : girlProfilePic,
         })

         if(newUser){
            //generate JWT token here
            generateTokenAndAetCookie(newUser._id, res);
            await newUser.save();

         res.status(201).json({
            _id: newUser._id,
            username: newUser.username,
            profilepic:newUser.profilePic
         })
        }else{
            res.status(400).json({error: "Invalid user data"});
        }

    }catch (error){
        console.log("error in signup controller", error.message);
        res.status(500).json({error:"internal Server Error"});
    }
}

export const login =async (req, res) => {
    try{
        const {username, password} = req.body;
        const user = await User.findOne({username});
        const isPassworCorrect = await bcryp.compare(password, user?.password || "");// null parm is use for user that doesn't exist if we don't add this params the user section will show internal server error (ilegal argumen: string undefined)

        if(!user || !isPassworCorrect){
            return res.status(400).json({error: "invalid username or password"})
        }

        generateTokenAndAetCookie(user._id, res);

        res.status(200).json({
            _id: user._id,
            username: user.username,
            profilePic: user.profilePic
        });

    }catch(error){
        console.log("error in signup controller", error.message);
        res.status(500).json({error:"internal Server Error"});
    }
}

export const logout = (req, res) => {
    try{
        res.cookie("jwt", "", {maxAge : 0});
        res.status(200).json({message: "Logged out succesfully"});
    }catch(error){
        console.log("error in signup controller", error.message);
        res.status(500).json({error:"internal Server Error"});
    }
}