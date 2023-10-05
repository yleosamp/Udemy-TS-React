import React from "react";
// 4 - Importação de componentes
import FirstComponent from "./components/FirstComponent";

//5 - Desestrutuando props
import SecondComponent from "./components/SecondComponent";
import Destructuring, { Category } from "./components/Destructuring";

// 6 - Hooks useState
import State from "./components/State";

// 8 - Type
type textOrNull = string | null;

function App() {
  // 1 - variaveis
  const name: string = "Leonardo";
  const age: number = 18;
  const isWorking: boolean = true;

  // 2 - funções
  const userGreeting = (name: string): string => {
    return `Olá, ${name}`;
  };

  // 8 - Types
  const myFirstText: textOrNull = "Texto";
  let mySecondText: textOrNull = null;

  return (
    <div className="App">
      <h1>TypeScript com React</h1>
      <h2>Nome: {name}</h2>
      <p>Idade: {age}</p>
      {isWorking && <p>Está trabalhando!</p>}
      <h3>{userGreeting(name)}</h3>
      <FirstComponent />
      <SecondComponent name="Segundo componente" age={18} />

      <Destructuring
        title="Primeiro post"
        content="Algum conteúdo"
        commentsQty={10}
        tags={["ts", "js"]}
        category={Category.TS}
      />

      <Destructuring
        title="Segundo post"
        content="Algum conteúdo"
        commentsQty={5}
        tags={["python"]}
        category={Category.P}
      />

      <State />

      <h1>TYPES</h1>
      {myFirstText && <p>Tem texto!</p>}
      {mySecondText && <p>Tem texxto!</p>}
    </div>
  );
}

export default App;
