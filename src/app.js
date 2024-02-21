import express from 'express';


const app = express()


// routes imports 

import router from './routes/user.route.js';


// routes declaration 

app.use("/api/v1/user", router)



export {app}