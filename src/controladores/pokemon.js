const {listarPokemons, detalharPokemon} = require('utils-playground');

const listaDePokemons = async (req, res) => {
    const { pagina } = req.query;
    const pokemons =  await listarPokemons(pagina ?? 1);
    return res.json(pokemons);
};

const detalhePokemon = async (req, res) => {
    const {idOuNome} = req.params;
    
    const pokemon = await detalharPokemon(idOuNome);

    const {id, name, height, weight, base_experience, forms, abilities, species} = pokemon;
   
    return res.json({id, name, height, weight, base_experience, forms, abilities, species});
};

module.exports = {
    listaDePokemons,
    detalhePokemon
};