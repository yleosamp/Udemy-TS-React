// 1 - Iniciando projeto
// console.log("Iniciado");

// 2 - Inicializando express
import { error } from "console";
import express, { NextFunction, Request, Response } from "express";
import { access } from "fs";
const app = express();

// Middleware
app.use(express.json());

app.get("/", (req, res) => {
  return res.send("Hello World!");
});

// 11 - Middleware para todas as rotas
function showUserPath(req: Request, res: Response, next: NextFunction) {
  console.log(req.path);
  next(); // Todo middleware precisa ter o next para que possa continuar a execução.
}

app.use(showUserPath); // Este middleware será utilizado em todas as rotas apartir de agora.

// 3 - Rota com post
app.post("/api/product", (req, res) => {
  console.log(req.body);
  return res.send("Produto adicionado!");
});

// 4 - Rota para todos os verbos
app.all("/api/product/check", (req, res) => {
  // req.method = VERBO HTTP
  if (req.method === "POST") {
    return res.send("Enviou algum registro");
  } else if (req.method === "GET") {
    return res.send("Leu algum registro");
  } else {
    return res.send("Não podemos realizar esta operação!");
  }
});

// 5 - Interfaces no Express
app.get("/api/interfaces", (req: Request, res: Response) => {
  return res.send("Utilizando as interfaces");
});

// 6 - Enviando JSON
app.get("/api/json", (req: Request, res: Response) => {
  return res.json({
    name: "Vehicle",
    engine: 2.0,
    brand: "Fiat",
    model: "Uno",
  });
});

// 7 - Router params
app.get("/api/params/:id", (req: Request, res: Response) => {
  const product = {
    name: "Camisa",
    cor: "Verde",
    tamanho: "P",
  };
  const id = req.params.id;

  if (id === "1") {
    return res.json(product);
  } else {
    return res.send("ID não encontrado");
  }
});

// 8 - Rotas complexas
app.get(
  "/api/params/:productId/reviews/:reviewId",
  (req: Request, res: Response) => {
    console.log(req.params);
    const reviewId = req.params.reviewId;
    const productId = req.params.productId;

    return res.send(`Acessando a review ${reviewId} do produto ${productId}`);
  }
);

// 9 - Router handler
function getUser(req: Request, res: Response) {
  const userId = req.params.id;
  console.log("Fazendo busca de usuário");

  return res.send(`Encontramos o usuário de id ${userId}`);
}

app.get("/api/handler/:id", getUser);

// 10 - Middleware
function verifyAdmin(req: Request, res: Response, next: NextFunction) {
  if (req.params.id === "1") {
    console.log("[ADMIN] Succes! Passou");
    next();
  } else {
    console.log("[ADMIN] Erro! Não é administrador.");
    return res.json({ access: "Denied!" });
  }
}

app.get(
  "/api/middleware/:id/admin",
  verifyAdmin,
  (req: Request, res: Response) => {
    return res.json({ acces: "Sucess!" });
  }
);

// 12 - Req e res com generic
app.get(
  "/api/generic/:details/profile/:name",
  (
    req: Request<{ details: string; name: string }>,
    res: Response<{ status: boolean }>
  ) => {
    console.log(req.params.details);
    console.log(req.params.name);

    return res.json({ status: true });
  }
);

// 13 - Tratando erros
app.get("/api/error", (req: Request, res: Response) => {
  try {
    throw new Error("Aconteceu algum erro!");
  } catch (err: any) {
    // Como não sabemos o que pode vir no "err", é um bom caso usar "any"
    return res.status(500).json({ error: err.message }); // Com o "status" podemos definir o código de erro
  }
});

// Ligando servidor
app.listen(3000, () => {
  console.log("Inicializado na porta 3000");
});
