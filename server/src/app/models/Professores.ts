import { model, Schema } from 'mongoose';

export const Professor = model('Professor', new Schema({
        nome: {
            type: String,
            required: true
        },
}))