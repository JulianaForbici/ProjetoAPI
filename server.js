const express = require('express');
const cors = require('cors');
const app = express();
const port = 8080;

app.use(cors());

const produtos = [
  {
    id: 1,
    nome: "Cartinha de Yugi-Oh",
    descricao: "Uma rara carta de Yugi-Oh, ideal para colecionadores.",
    preco: 19.99,
    categoria: "Colecionáveis",
    imagemURL: "https://i.pinimg.com/236x/a2/31/77/a231775eafb252bb4510f7295ca09521.jpg"
  }
];

app.get('/produto', (req, res) => {
  res.json(produtos);
});

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});
