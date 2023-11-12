import { model, Schema } from 'mongoose';

export const Disciplina = model('Disciplina', new Schema({

    nome: {
        type: String,
        required: true
    },

    horario: {
        type: String,
        required: false
    },

    diaSemana: {
        type: String,
        required: false
    },

    professores: [
        {
            type: Schema.Types.ObjectId,
            required: false,
            ref: 'professor'
        }
    ],
}))