import dotenv from 'dotenv';
dotenv.config();
import express from 'express'
import mongoose from 'mongoose'
import {Book} from './models/bookmodels.js'
import booksRoute from './routes/booksRoute.js'
import cors from 'cors'
const app= express();

app.use(express.json());

app.use(cors())

// app.use(cors({
//     origin:'http://localhost:5173/',
//     methods:['GET','POST','PUT','DELETE'],
//     allowedHeaders:['Content-Type']
// }));

mongoose.connect(process.env.mongoDBURL)

app.get('/',(req,res)=>{
    res.status(200).send("Welcome to BookStore");
})

app.use('/books',booksRoute)


app.listen(3000,()=> console.log("App started succesfully at port: 3000"));