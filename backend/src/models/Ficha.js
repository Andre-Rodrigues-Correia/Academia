import mongoose from 'mongoose';

const { Schema } = mongoose;
const FichaSchema = new Schema(
  {
    aluno: { type: Schema.Types.ObjectId, ref: 'Aluno' },
    instrutor: { type: Schema.Types.ObjectId, ref: 'Instrutor' },
    ativa: {
      type: Boolean,
      required: true,
    },
    dataInicio: {
      type: Date,
      required: true,
    },
    execucoes: [
      {
        dataHoraInicio: {
          type: Date,
          required: true,
        },
        dataHoraFim: {
          type: Date,
          required: true,
        },
        observacoes: {
          type: String,
          trim: true,
        },
      },
    ],
  },
  { timestamps: true },
);
export default mongoose.model('Ficha', FichaSchema);
