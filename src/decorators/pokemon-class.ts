
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

function CheckValidPokemonID(){
    return function(target: any, propertyKey: string, descriptor: PropertyDescriptor){
        //console.log({target, propertyKey, descriptor});
        //descriptor.value = () => console.log('Hola Mundo');
        const originalMethod = descriptor.value;
        descriptor.value = (id: number) => {
            if(id < 1 || id > 800){
                return console.log('El ID del pokemon debe estar entre 1 y 800');
            }else{
                return originalMethod(id);
            }
        }
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

    @CheckValidPokemonID()
    savePokemonToDB(id: number){
        console.log(`Pokemon guardado en la base de datos ${id}`);
    }
}