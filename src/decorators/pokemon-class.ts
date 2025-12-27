
//!Decorador de funciones
function printToConsole(constructor: Function){
    console.log(constructor);
}

const printToConsoleConditional = (conditional: boolean = false) : Function => {
    if(conditional) return printToConsole;
    else {
        return () => {};
    }
}

const blockPrototype = function(constructor: Function){
    Object.seal(constructor)
    Object.seal(constructor.prototype)
}

@blockPrototype
@printToConsoleConditional(true)
export class Pokemon{
    public publicAPI: string = 'https://pokeapi.co/api/v2/';
    constructor(
        public name: string
    ){
        this.name = name;
    }
}