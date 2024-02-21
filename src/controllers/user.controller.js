import {asyncHandler} from '../utils/asyncHandler.js';
import {ApiError} from '../utils/ApiError.js';
import {User} from '../models/user.model.js';
import {ApiResponse} from '../utils/ApiResponse.js';
import {uploadOnCloudinary} from '../utils/cloudinary.js';
import mongoose from 'mongoose';





const registerUser = asyncHandler(async (req, res) => {
    

    // get user detail from frontend

    const {fullname, email, username, password} = req.body || {};
    console.log(fullname);
    console.log(email);
    console.log(password);
    console.log(username);

  
    if(
        [
            fullname, email, username, password
        ].some((field) => field?.trim() === "")
    ) {
        throw new ApiError (400," all fields are required ");
    }

    const existedUser = await User.findOne({
        $or: [{username}, {email}]
    })

    if(existedUser) {
        throw new ApiError(400," email or username already registred please log in ")
    }

    // check for images avatar and cover image 

    // const avatarLocalPath = req.files?.avatar[0]?.path;

    // let coverImageLocalPath;
    
    // if(req.files && Array.isArray(req.file.coverImage) && req.files.coverImage.length > 0) {
    //     coverImageLocalPath = req.files.coverImage[0].path
    // }


    // if(!avatarLocalPath) {
    //     throw new ApiError(400,"avatar file is required")
    // }

    // const avatar = await uploadOnCloudinary(avatarLocalPath)

    // const coverImage = await uploadOnCloudinary(coverImageLocalPath)

    // if(!avatar) {
    //     throw new ApiError (400," avatar file is not uploaded ")
    // }

    // below method is creating user in database 


    // 
  
  
    const user = await User.create({
        fullname, 
        email, 
        username,
        password,
        // avatar: avatar.url,
        // coverImage: coverImage?.url || "",
    })


    const createdUser = await User.findById(user._id).select(
        "-password -refreshToken"
    )

    if(!createdUser){
        throw new ApiError(400," something went wrong while registering the user ")

    }

    return res.status(201).json(
        new ApiResponse(200, createdUser, " user registration successfully ")
    )
})


export {
    registerUser
}