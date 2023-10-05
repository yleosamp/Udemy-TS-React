"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
function createdDate(data) {
    data.prototype.createdAt = new Date();
}
let User = class User {
    constructor(name, password) {
        this.name = name;
        this.password = password;
    }
};
User = __decorate([
    createdDate
], User);
const usuario = new User("Leonardo", 123);
console.log(usuario);
console.log(usuario.createdAt);
