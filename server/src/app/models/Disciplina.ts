import { model, Schema } from 'mongoose';

export const Disciplina = model('Disciplina', new Schema({

        nome: {
            type: String,
            required: true
        },

        horario: {
            type: String,
            required: true
        },

        diaSemana: {
            type: String,
            required: true
        },

        professores: [
            {
            type: Schema.Types.ObjectId,
            required: true,
            ref: 'professor'
            }
    ],
}))