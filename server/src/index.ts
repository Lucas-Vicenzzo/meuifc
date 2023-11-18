import express from 'express';
import mongoose from 'mongoose';
import { router } from './router';


mongoose.connect('mongodb://localhost:27017')
.then(()=> {
        const app = express();        
        const porta=3000;
        
        app.use(express.json()) 
        app.use((req, res, next) => {
            res.setHeader("Access-Control-Allow-Origin", "*");
        })
        app.use(router)
        app.listen(porta, ()=>{
            console.log(`🚀 Server Rodando em http://localhost:${porta}`);
        })

    })
.catch(()=> console.log('ô carai...'));



