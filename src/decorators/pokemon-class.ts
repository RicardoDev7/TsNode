
//!Decorador de funciones
function printToConsole(constructor: Function){
    console.log(constructor);
}

@printToConsole
export class Pokemon{
    public publicAPI: string = 'https://pokeapi.co/api/v2/';
    constructor(
        public name: string
    ){
        this.name = name;
    }
}