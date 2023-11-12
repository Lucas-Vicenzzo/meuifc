import express from 'express';
import mongoose from 'mongoose';
import { router } from './router';
import cors from 'cors';


mongoose.connect('mongodb://localhost:27017')
.then(()=> {
        const app = express();
        const porta = 4000;

        app.use(cors())
        app.use(express.json())
        app.use(router)
        app.listen(porta, ()=>{
            console.log(`🚀 Server Rodando em http://localhost:${porta}`);
        })

    })
.catch(()=> console.log('ô carai...'));



