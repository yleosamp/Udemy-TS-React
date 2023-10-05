"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const greet_1 = __importDefault(require("./greet")); // Importando arquivos
const variable_1 = require("./variable"); // Importando variáveis.
(0, greet_1.default)("Leonardo");
console.log(variable_1.nome);
console.log(variable_1.nome2);
