// Constraint (regra) no generic
function myGeneric<T extends {name: string}> (obj: T): string {
  return `Seu nome é: ${obj.name}`
}

const myObj: {name: string, value: number} = {name: "Portão", value: 1120}
const myErrorObj: {value: number, type: string} = {value: 231, type: "A"}

console.log(myGeneric(myObj)) // Tudo certo, pois passei a propriedade obrigatória "name"
// console.log(myGeneric(myErrorObj)) // Erro, pois não passei a propriedade obrigatória "name"

// Generic na interface
interface myIGeneric<T, U> {
  name: string
  type: string
  color: string

  wheels: T // Será que todo objeto criado terá rodas? E se for uma roupa?
  engine: U // Será que todo objeto criado terá motor? E se for uma caneta?
}

type roupas = myIGeneric<boolean, boolean> // Será uma loja de roupas, então os dois generic serão boolean, e guardarei valor de false
const lojaDeRoupas: roupas = {
  name: "Camisa Supreme", 
  type: "Regata", 
  color: "Branco", 
  wheels: false, // Defini no "type roupas" que os dois generic serão boolean, então false
  engine: false // Defini no "type roupas" que os dois generic serão boolean, então false
}

// console.log(lojaDeRoupas)

type carro = myIGeneric<number, number> // Será uma loja de carros, então os dois generic serão number (wheels e engine)
const concessionaria: carro = {
  name: "Kombi",
  type: "Carro",
  color: "Verde",
  wheels: 4, // Agora é uma concessionaria, então terá rodas
  engine: 1.2 // E motor
}

// console.log(concessionaria)

// Keyof operator
interface Character {
  name: string
  age: number
  meters: number
}

type key = keyof Character
function getCharacterInfo(obj: Character, key: key, key2: key): string { // Aqui estou aceitando duas keys como argumento.
  return `Olá, ${obj[key]}, você tem ${obj[key2]} ${key2}`
}

const myChar: Character = {
  name: "Leonardo",
  age: 18,
  meters: 1.80
}

console.log(getCharacterInfo(myChar, "name", "age")) // key: pega o name. key2: pega o age.