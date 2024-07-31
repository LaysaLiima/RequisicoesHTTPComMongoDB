const express = require('express');
const professores = require('./Controllers/ProfessorController');

const rotas = express();

rotas.get('/professores', professores.listarProfessores);
rotas.get('/professores/:id', professores.ObterUmProfessor);
rotas.post('/professores', professores.cadastrarProfessor);
rotas.put('/professores/:id', professores.AtualizarUmProfessor);
rotas.delete('/professores/:id', professores.DeletarUmProfessor);

module.exports = rotas;
