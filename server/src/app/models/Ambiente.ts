import { model, Schema } from 'mongoose';

export const Ambiente = model('Ambiente', new Schema({
    nome: {
        type: String,
        required: true
    },
    nomesAlt: [{
        nome: {
            type: String,
            required: false,
        }
    }],
    latitude: {
        type: String,
        required: false,
    },
    longitude: {
        type: String,
        required: false,
    },
    descricao: {
        type: String,
        required: false,
    },
    imagens: [{
        path: {
            type: String,
            required: false
        }
    }],
    bloco: {
        type: Schema.Types.ObjectId,
        required: false,
        ref: 'Bloco'
    },
    categoria: {
        type: Schema.Types.ObjectId,
        required: true,
        ref: 'Categoria'
    }
}))
