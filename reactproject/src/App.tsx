import React, { createContext, useContext } from "react";

// 4 - Importação de componentes
import FirstComponent from "./components/FirstComponent";

//5 - Desestrutuando props
import SecondComponent from "./components/SecondComponent";
import Destructuring, { Category } from "./components/Destructuring";

// 6 - Hooks useState
import State from "./components/State";

// 9 - Context
import Context from "./components/Context";
// Helmet
import { Helmet, HelmetProvider } from "react-helmet-async";

// 8 - Type
type textOrNull = string | null;

// 9 - Context
interface IAppContext {
  language: string;
  framework: string;
  projects: number;
}

export const AppContext = createContext<IAppContext | null>(null);

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

  // 9 - Context
  const contextValue: IAppContext = {
    language: "JavaScript",
    framework: "Express",
    projects: 5,
  };

  return (
    <AppContext.Provider value={contextValue}>
      <HelmetProvider>
        <Helmet>
          <html lang="pt_BR" />
        </Helmet>
      </HelmetProvider>

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
        {myFirstText ? <p>Tem texto!</p> : <p>É nulo!</p>}
        {mySecondText ? <p>Tem texto!</p> : <p>É nulo!</p>}
      </div>

      <h1>CONTEXT</h1>
      <Context />
    </AppContext.Provider>
  );
}

export default App;
