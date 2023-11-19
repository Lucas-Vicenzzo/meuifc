import { model, Schema } from 'mongoose';

export const Andar = model('Andar', new Schema({

  nome: {
    type: String,
    required: true
  }
}))