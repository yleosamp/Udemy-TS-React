// Somar todos numeros de uma array

function sumAll(...n: number[]) {
  return n.reduce( (number: number, sum: number) => sum + number )
}

console.log(sumAll(1, 6));

// Destructuring

function destruct({name, value}: {name: string, value: number}): void {
  console.log(`Você selecionou o produto ${name} com o valor de R$${value}`)
}

const item = {name: "Notebook 2AM", value: 4542}
destruct(item)