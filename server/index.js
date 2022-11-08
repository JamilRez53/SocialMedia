import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';
import postRoutes from './routes/posts.js';
const app = express();

app.use('/posts',postRoutes);
app.use(bodyParser.json({  extended: true }))
app.use(bodyParser.urlencoded({ extended: true }))
app.use(cors());
const CONNECTION_URL = 'mongodb+srv://viva:1234@cluster0.aqvn4av.mongodb.net/?retryWrites=true&w=majority'
const PORT = process.env.PORT|| 5000;
mongoose.connect(CONNECTION_URL)
              .then(()=>app.listen(PORT,()=>console.log(`Connected on ${PORT}`)))
              .catch((error)=> console.log(error.message));
            

