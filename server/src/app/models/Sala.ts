import { model, Schema } from 'mongoose';

export const Sala = model('Sala', new Schema({
  nome: {
    type: String,
    required: true,
    unique: true,
    dropDubs: true
  },
  nomesAlt: [{
    nome: {
      type: String,
      required: true
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

  turmas: [{
    type: Schema.Types.ObjectId,
    required: false,
    ref: 'Turma'
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