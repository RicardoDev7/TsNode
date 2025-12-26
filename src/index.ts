import { genericFunction, printObject, genericFunctionArrow } from "./generics/generics";

printObject('Hola');
printObject(1234);
printObject(['Ricardo', 'Alvaro', 'Rosa']);
printObject([1, 2, 3]);
printObject(50.50);
printObject({a:'1', b:'2', c:3});

console.log(genericFunction<Number>(123));
console.log(genericFunction<Date>(new Date()).getDate());
console.log(genericFunction<String>('Ricardo Metzger').toUpperCase());

console.log(genericFunctionArrow('ABC'));