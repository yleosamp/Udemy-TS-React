"use strict";
// Readonly em classes
class NewClass {
    constructor(firstName, lastName) {
        this.age = 18;
        this.firstName = firstName;
        this.lastName = lastName;
    }
}
const user = new NewClass("Leonardo", "Daitx");
console.log(user.firstName); // Leonardo
console.log(user.lastName); // Daitx
console.log(user.age); // 18
// user.age = 10 // ERRO! Não pode se alterar uma propriedade "readonly" 
user.firstName = "Leandro"; // É possível alterar pois não é "readonly"
// Getter
class myGetter {
    constructor(first, last) {
        this.first = first;
        this.last = last;
    }
    get fullName() {
        return `${this.first} ${this.last}`;
    }
}
const myUser = new myGetter("Leonardo", "Daitx");
console.log(myUser.fullName); // Não é necessário utilizar os (), pois não é um método e sim um getter!
// Setter
class myCoords {
    // Quando é setter, não devemos colocar constructor, e sim fazer assim ^
    set setCoordsX(x) {
        if (x === 0) { // Se a coordinate for 0, ele irá retornar vazio
            return;
        }
        else { // Se não for 0, vai setar o valor na propriedade
            this.x = x;
            console.log("X setado com sucesso!");
        }
    }
    set setCoordsY(y) {
        if (y === 0) {
            return;
        }
        else {
            this.y = y;
            console.log("Y setado com sucesso!");
        }
    }
    set setCoordsZ(z) {
        if (z === 0) {
            return;
        }
        else {
            this.z = z;
            console.log("Z setado com sucesso!");
        }
    }
    get getCoords() {
        return `X: ${this.x} Y: ${this.y} Z: ${this.z}`;
    }
}
const coordinates = new myCoords(); // Basta instanciar sem colocar valores
coordinates.setCoordsX = 15; // Os valores são setados aqui, no setCoords (O setter)
coordinates.setCoordsY = 12;
coordinates.setCoordsZ = 1;
console.log(coordinates.getCoords); // Aqui eu pego o getCoords (O getter) para me dar os valores.
// Override de métodos
class myOver {
    myCar() {
        console.log("Classe pai"); // Por padrão ela irá retornar isso "Classe pai"
    }
}
class mySon extends myOver {
    myCar() {
        console.log("Classe filha"); // Mas eu substitui por "Classe filha" na herança.
    }
}
const classOverride = new mySon();
classOverride.myCar();
// VISIBLIDADE DE MÉTODOS
// Public
// A visibilidade "public" é a padrão, que utilizamos até agora. Pode ou não ser mostrada, então por isso não vai ter exemplo.
// Protected
class ClassePaiProtected {
    constructor() {
        this.x = 10; // Protegido, só poderá ser acessado diretamente ou então com método em classe filha
    }
}
class classeFilhaProtected extends ClassePaiProtected {
    showX() {
        console.log(this.x);
    }
}
const classProtected = new classeFilhaProtected(); // Instanciei a classe filha com o método que pega o x
classProtected.showX(); // Estou acessando o método que mostra o X protegido no console.
// Private
class myPrivateClass {
    constructor() {
        this.name = "Leonardo";
        this.lastName = "Daitx";
    }
    fullName() {
        return `${this.name} ${this.lastName} - Private`;
    }
    showFullName() {
        console.log(this.fullName());
    }
}
const privateShow = new myPrivateClass();
privateShow.showFullName();
// Static
class StaticExample {
    static staticMethod() {
        console.log(this.x);
    }
}
StaticExample.x = 12;
StaticExample.x = 11; // Alterando o valor diretamente pela classe
StaticExample.staticMethod(); // Acessando diretamente pela classe
// Parameter Properties
class ParameterProperties {
    constructor(name, value) {
        this.name = name;
        this.value = value;
        this.name = name;
        this.value = value;
    }
    get showValue() {
        return this.value;
    }
}
const parameterExamples = new ParameterProperties("Leonardo", 5);
console.log(parameterExamples.showValue); // Saída: 5.
console.log(parameterExamples.name); // Saída: Leonardo
