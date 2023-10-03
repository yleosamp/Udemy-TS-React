// Readonly em classes
class NewClass {
  firstName
  lastName
  readonly age = 18

  constructor(firstName: string, lastName: string) {
    this.firstName = firstName
    this.lastName = lastName
  }
}

const user = new NewClass("Leonardo", "Daitx")
console.log(user.firstName) // Leonardo
console.log(user.lastName) // Daitx
console.log(user.age) // 18
// user.age = 10 // ERRO! Não pode se alterar uma propriedade "readonly" 
user.firstName = "Leandro" // É possível alterar pois não é "readonly"

// Getter
class myGetter {
  first
  last

  constructor(first: string, last: string) {
    this.first = first
    this.last = last
  }

  get fullName() { // Um Getter sempre irá pedir um retorno.
    return `${this.first} ${this.last}`
  }
}

const myUser = new myGetter("Leonardo", "Daitx")
console.log(myUser.fullName); // Não é necessário utilizar os (), pois não é um método e sim um getter!

// Setter
class myCoords {
  x!: number
  y!: number
  z!: number
  // Quando é setter, não devemos colocar constructor, e sim fazer assim ^
  set setCoordsX(x: number) {
    if(x === 0) { // Se a coordinate for 0, ele irá retornar vazio
      return
    } else { // Se não for 0, vai setar o valor na propriedade
      this.x = x
      console.log("X setado com sucesso!")
    }
  }

  set setCoordsY(y: number) {
    if(y === 0) {
      return
    } else {
      this.y = y
      console.log("Y setado com sucesso!")
    }
  }

  set setCoordsZ(z: number) {
    if(z === 0) {
      return
    } else {
      this.z = z
      console.log("Z setado com sucesso!")
    }
  }

  get getCoords() {
    return `X: ${this.x} Y: ${this.y} Z: ${this.z}`
  }
}

const coordinates = new myCoords() // Basta instanciar sem colocar valores
coordinates.setCoordsX = 15 // Os valores são setados aqui, no setCoords (O setter)
coordinates.setCoordsY = 12
coordinates.setCoordsZ = 1
console.log(coordinates.getCoords); // Aqui eu pego o getCoords (O getter) para me dar os valores.

// Override de métodos
class myOver {
  myCar(): void {
    console.log("Classe pai") // Por padrão ela irá retornar isso "Classe pai"
  }
}

class mySon extends myOver {
  myCar(): void {
      console.log("Classe filha") // Mas eu substitui por "Classe filha" na herança.
  }
}

const classOverride = new mySon()
classOverride.myCar()

// VISIBLIDADE DE MÉTODOS
// Public

// A visibilidade "public" é a padrão, que utilizamos até agora. Pode ou não ser mostrada, então por isso não vai ter exemplo.

// Protected
class ClassePaiProtected {
  protected x = 10 // Protegido, só poderá ser acessado diretamente ou então com método em classe filha
}

class classeFilhaProtected extends ClassePaiProtected {
  public showX() { // Método para pegar o x protegido
    console.log(this.x)
  }
}

const classProtected = new classeFilhaProtected() // Instanciei a classe filha com o método que pega o x
classProtected.showX() // Estou acessando o método que mostra o X protegido no console.

// Private
class myPrivateClass {
  private name: string = "Leonardo"
  private lastName: string = "Daitx"

  private fullName(): string { // Método privado que faz o nome completo
    return `${this.name} ${this.lastName} - Private`
  }

  public showFullName(): void { // Método público que mostra o nome completo gerado pelo método privado
    console.log(this.fullName())
  }
}

const privateShow = new myPrivateClass()
privateShow.showFullName()

// Static
class StaticExample {
  public static x: number = 12

  public static staticMethod(): void {
    console.log(this.x)
  }
}

StaticExample.x = 11 // Alterando o valor diretamente pela classe
StaticExample.staticMethod() // Acessando diretamente pela classe

// Parameter Properties
class ParameterProperties {
  constructor(public name: string, private value: number) {
    this.name = name
    this.value = value
  }

  get showValue() { // Estou pegando o valor de "value" já que ele é privado.
    return this.value
  }
}

const parameterExamples = new ParameterProperties("Leonardo", 5)
console.log(parameterExamples.showValue) // Saída: 5.
console.log(parameterExamples.name) // Saída: Leonardo
