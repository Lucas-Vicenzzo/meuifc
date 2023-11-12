import { model, Schema } from 'mongoose';

export const Categoria = model('Categoria', new Schema({
  nome: {
    type: String,
    required: true,
    unique: true,
    dropDups: true
  }

}))