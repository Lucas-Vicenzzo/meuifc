import { model, Schema } from 'mongoose';

export const professor = model('Professor', new Schema({
        nome: {
            type: String,
            required: true
        },
}))