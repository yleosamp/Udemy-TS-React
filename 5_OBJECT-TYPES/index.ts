// readonly type
interface carFabric {
  brand: string
  readonly wheels: number // Atribuindo o tipo "readonly" a propriedade
}

const car: carFabric = {brand: "Chevrolet", wheels: 4}
console.log(car); // { brand: 'Chevrolet', wheels: 4 }

// car.wheels = 4 // ERRO! Não é possível alterar o valor pois ele é read-only.

// Index signature
interface signature {
  [index: string]: number
}

const macacoPardo: signature = {teste: 2, nome: 10, idade: 35}
macacoPardo.novo = 1
console.log(macacoPardo);

// Ready-only array
let myArr: ReadonlyArray<number> = [1, 2, 3] // Criei uma array de números "readonly"

// myArr.push(20) // Impossível dar push por conta do "readonly"
// myArr[3] = 13 // Impossível adicionar mais um elemento por conta do "readonly"
// myArr[1] = 3  // Impossível modificar valores por conta do "readonly"

// Somando interfaces
interface interOne { // Crio a primeira interface
  numeroUm: number
  numeroDois: string
}

interface interTwo { // Crio a segunda interface
  numeroTres: number
  numeroQuatro: string
}

type unindoInterface = interOne | interTwo // Junto todas por meio do "type"

const unidos: unindoInterface = { // Utilizo o meu "type" com as duas interfaces
  numeroUm: 1, numeroDois: "dois", numeroTres: 3, numeroQuatro: "quatro"
}

// console.log(unidos)

// Herança nas interfaces
interface interOneHeranca { // Crio a interface pai
  numeroUmHeranca: number
  numeroDoisHeranca: string
}

interface interTwoHeranca extends interOneHeranca { // Crio a interface filho e junto as duas por meio do "extends"
  numeroTresHeranca: number
  numeroQuatroHeranca: string
}



const unidosHeranca: interTwoHeranca = { // Utilizo a interface filho pois terá as propriedades das duas interfaces
  numeroUmHeranca: 1, numeroDoisHeranca: "dois", numeroTresHeranca: 3, numeroQuatroHeranca: "quatro"
}

// console.log(unidosHeranca)