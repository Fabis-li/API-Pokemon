const {Router} = require('express');
const pokemons = require('./controladores/pokemon');

const rotas = Router();

rotas.get('/pokemon', pokemons.listaDePokemons);
rotas.get('/pokemon/:idOuNome', pokemons.detalhePokemon);


module.exports = rotas;