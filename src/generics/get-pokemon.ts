import axios from 'axios';

export const getPokemon = async (pokemonID : number)=> {
    const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemonID}`);
    console.log(response);
}