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
  },
  {
    id: 2,
    nome: "Dragão Branco de Olhos Azuis",
    descricao: "Uma das cartas mais poderosas de Yugi-Oh.",
    preco: 50.00,
    categoria: "Colecionáveis",
    imagemURL: "https://i.pinimg.com/236x/b9/8f/c2/b98fc2480ee8000d4f88db6487d060c2.jpg"
  },
  {
    id: 3,
    nome: "Mago Negro",
    descricao: "Uma carta poderosa de magia.",
    preco: 35.99,
    categoria: "Colecionáveis",
    imagemURL: "https://i.pinimg.com/236x/f6/24/f2/f624f2d0e4560708e8ca2927eae5d6fe.jpg"
  }
];

app.get('/produto', (req, res) => {
  let { sortBy, order } = req.query;
  sortBy = sortBy || 'nome';  
  order = order || 'asc';     

  if (sortBy !== 'nome' && sortBy !== 'preco') {
    return res.status(400).json({ message: "Parâmetro 'sortBy' inválido. Use 'nome' ou 'preco'." });
  }

  if (order !== 'asc' && order !== 'desc') {
    return res.status(400).json({ message: "Parâmetro 'order' inválido. Use 'asc' ou 'desc'." });
  }

  const produtosOrdenados = [...produtos].sort((a, b) => {
    let valueA = sortBy === 'nome' ? a.nome : a.preco;
    let valueB = sortBy === 'nome' ? b.nome : b.preco;

    if (order === 'asc') {
      return valueA < valueB ? -1 : (valueA > valueB ? 1 : 0);
    } else {
      return valueA > valueB ? -1 : (valueA < valueB ? 1 : 0);
    }
  });

  res.json(produtosOrdenados);
});

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});
