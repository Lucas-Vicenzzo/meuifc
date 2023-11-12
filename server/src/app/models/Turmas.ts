import { model, Schema } from 'mongoose';

export const Turma = model('Turma', new Schema({

    nome: {
        type: String,
        required: true
    },

    disciplinas: {
        type: Schema.Types.ObjectId,
        required: true,
        ref: 'Disciplina'
    },

}))