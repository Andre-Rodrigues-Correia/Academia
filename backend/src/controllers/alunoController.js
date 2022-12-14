import bcrypt from 'bcryptjs';
import Aluno from '../models/Aluno.js';

export const createAluno = async (req, res, next) => {
  const aluno = new Aluno(req.body);
  try {
    const salt = await bcrypt.genSalt(10);
    const hashSenha = await bcrypt.hash(aluno.senha, salt);
    aluno.senha = hashSenha;
    const createdAluno = await aluno.save();
    return res.status(201).json(createdAluno);
  } catch (error) {
    next(error);
  }
};
export const updateAluno = async (req, res, next) => {
  try {
    const updatedAluno = await Aluno.findByIdAndUpdate(
      req.params.id,
      { $set: req.body },
      { new: true },
    );
    return res.status(200).json(updatedAluno);
  } catch (error) {
    next(error);
  }
};
export const deleteAluno = async (req, res, next) => {
  try {
    await Aluno.findByIdAndDelete(req.params.id);
    return res.status(200).json({ message: 'Aluno excluído com sucesso.' });
  } catch (error) {
    next(error);
  }
};
export const getAluno = async (req, res, next) => {
  try {
    const aluno = await Aluno.findById(req.params.id);
    return res.status(200).json(aluno);
  } catch (error) {
    next(error);
  }
};
export const getAlunos = async (req, res, next) => {
  try {
    const alunos = await Aluno.find();
    return res.status(200).json(alunos);
  } catch (error) {
    next(error);
  }
};
