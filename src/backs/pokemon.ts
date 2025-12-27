import { getPokemon } from "../generics/get-pokemon";

getPokemon(4)
    .then(p => console.log(p.sprites.front_default))
    .catch(console.log)
    .finally
    {
        console.log('Fin del pokedex');
    };