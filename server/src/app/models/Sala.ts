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
    
    nome: {
      type: String,
      required: true,
      unique: true,
      dropDubs: true
    },

    disciplinas:[{
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
              nome: {
              type: String,
              required: true,
              unique: true,
              dropDubs: true
            },
          }
      ],
    }],
  }],

  bloco: {
    type: String,
    required: true,
    unique: true,
    dropDubs: true
  },
  categoria: {
    type: String,
    required: true,
    unique: true,
    dropDubs: true
  }
}))
