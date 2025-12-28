import { Pokemon } from "./decorators/pokemon-class";

const charmander = new Pokemon('Charmander');
console.log(charmander);

//(Pokemon.prototype as any).customName = 'Pikachu';
//console.log(charmander);

charmander.savePokemonToDB(-5);
charmander.savePokemonToDB(5);

charmander.publicAPI = 'Hola, este es un nuevo valor';