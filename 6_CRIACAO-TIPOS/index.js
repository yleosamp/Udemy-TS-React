"use strict";
// Constraint (regra) no generic
function myGeneric(obj) {
    return `Seu nome é: ${obj.name}`;
}
const myObj = { name: "Portão", value: 1120 };
const myErrorObj = { value: 231, type: "A" };
console.log(myGeneric(myObj)); // Tudo certo, pois passei a propriedade obrigatória "name"
const lojaDeRoupas = {
    name: "Camisa Supreme",
    type: "Regata",
    color: "Branco",
    wheels: false,
    engine: false // Defini no "type roupas" que os dois generic serão boolean, então false
};
const concessionaria = {
    name: "Kombi",
    type: "Carro",
    color: "Verde",
    wheels: 4,
    engine: 1.2 // E motor
};
function getCharacterInfo(obj, key, key2) {
    return `Olá, ${obj[key]}, você tem ${obj[key2]} ${key2}`;
}
const myChar = {
    name: "Leonardo",
    age: 18,
    meters: 1.80
};
console.log(getCharacterInfo(myChar, "name", "age")); // key: pega o name. key2: pega o age.
