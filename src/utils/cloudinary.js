import {v2 as cloudinary} from 'cloudinary';
import fs from 'fs';
import mongoose from 'mongoose';
          
cloudinary.config({ 
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME, 
  api_key: process.env.CLOUDINARY_API_KEY, 
  api_secret: process.env.CLOUDIANRY_API_SECRET
});



const uploadOnCloudinary = async (localFilePath) => {
    try {
        if(!localFilePath) return null

        // upload on cloudinary 

        const response = await cloudinary.uploader.upload(localFilePathm,{
            resource_type: "auto"
        })

        // file has been  uploaded successfully 
        console.log(" file is uploaded successfully ", response.url);
        fs.unlinkSync(localFilePath);
        return response;
    }
    catch (error) {
        fs.unlinkSync(localFilePath)
        return "failed";
    }
}


export {uploadOnCloudinary}