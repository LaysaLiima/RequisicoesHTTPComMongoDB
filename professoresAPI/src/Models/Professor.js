const mongoose = require('mongoose');

const professorSchema = new mongoose.Schema({
    nome: { type: String, required: true },
    disciplina: { type: String, required: true },
    carga_horaria: { type: Number, required: true }
});

const Professor = mongoose.model('Professor', professorSchema);

module.exports = Professor;
