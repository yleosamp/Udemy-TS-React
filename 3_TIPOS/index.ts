class User {
  name

  constructor(name: string) {
    this.name = name
  }
}

class Admin extends User {
  constructor(name: string) {
    super(name)
  }
}

const jonas = new User("Jonas")
const leonardo = new Admin("Leonardo")

function verifyAdmin(user: object): void {
  if(user instanceof Admin) {
    console.log(`${user.name} é ADM`);
  } else if(user instanceof User) {
    console.log(`${user.name} é um usuário normal.`);
  }
}

verifyAdmin(leonardo)
verifyAdmin(jonas)

console.log("====================");

// Operador IN

class racaDog {
  name
  raca

  constructor(name: string, raca?: string){
    this.name = name
    if(typeof raca != "undefined") { // Fazendo uma verficação de tipo no Constructor
      this.raca = raca
    }
  }
}

function verificarRaca(dog: racaDog): void {
  if("raca" in dog) { // Se tiver a propriedade "raca" no obj "dog"
    console.log(`A raça do cachorro é ${dog.raca}`);
  } else { // Se não tiver a prorpiedade "raca" no obj dog
    console.log(`O cão não tem raça`);
  }
}
// A nossa função sempre vai receber um objeto, mais especificamente o objeto/classe "racaDog".

const brit = new racaDog("Britney")
const samy = new racaDog("Samira", "Pitbull")

verificarRaca(brit) // O cão não tem raça
verificarRaca(samy) // A raça do cachorro é Pitbull

// Desafio Narrowing
type rating = number | boolean

let Rating: rating = false
function FeedBack(rating: rating): void {
  if(rating === false) {
    console.log(`Você não deu nenhuma estrela para este vídeo.`)
  } else if(typeof rating === "number" && rating <= 5) {
    console.log(`Você deu ${rating} estrelas para este vídeo.`)
  } else {
    console.log(`É impossível dar uma nota de ${rating} estrelas.`)
  }
} 

FeedBack(Rating)