import {Router} from 'express';

// import controllers 

import {
    registerUser
} from '../controllers/user.controller.js';


//import middlewares to varify the user and uploading 

import { upload } from '../middlewares/multer.middleware.js';


const router = Router()

// write router for registering the user 

router.route("/register").post(
    upload.fields([
        {
            name: 'avatar',
            maxCount: 1
        },

        {
            name: 'coverImage',
            maxCount: 1
        }

    ]),
    registerUser
)


export default router