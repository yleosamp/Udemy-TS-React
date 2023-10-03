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