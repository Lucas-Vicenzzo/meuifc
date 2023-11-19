import { model, Schema } from 'mongoose';

export const Bloco = model('Bloco', new Schema ({

  nome: {
    type: String,
    required: true
  }
  
}))