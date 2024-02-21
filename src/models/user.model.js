import mongoose from 'mongoose';
import jwt from 'jsonwebtoken'

const Schema = mongoose.Schema;

const userSchema = new Schema({

    fullname: {
        type: String,
        requied: true,
        trim: true,
        index: true,
    },


    email: {
        type: String,
        unique: true,
        required: true,
        

    },

    username: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        index: true
    },

    password: {
        type: String,
        required: [true, "password must be required"],

        
    },

    
    // avatar: {
    //     type: String,   /// clodinary url of avatar 
    //     required: true,
    // },

    coverImage: {
        type: String,

    },

    // watchHistory: [
    //     {
    //         type: Schema.Type.ObjectId,
    //         ref: "video"
    //     }
    // ],

   

    
    
    refreshToken: {
        type: String,
    }

}, {timestamps: true});





// write the middleware for the encrypt your password 







export const User = mongoose.model("User", userSchema);

