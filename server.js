const express = require("express");
const server = express();

const ideas = [
  {
    img: "https://cdn-icons-png.flaticon.com/512/2729/2729007.png",
    title: "Cursos de Programação",
    category: "Estudo",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Recrum nisi alias ipsum, fugiat sed",
    url: "https://rocketseat.com.br",
  },
  {
    img: "https://cdn-icons-png.flaticon.com/512/2729/2729005.png",
    title: "Exercícios",
    category: "Saúde",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Recrum nisi alias ipsum, fugiat sed",
    url: "https://rocketseat.com.br",
  },
  {
    img: "https://cdn-icons-png.flaticon.com/512/2729/2729027.png",
    title: "Meditação",
    category: "Mentalidade",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Recrum nisi alias ipsum, fugiat sed",
    url: "https://rocketseat.com.br",
  },
  {
    img: "https://cdn-icons-png.flaticon.com/512/2729/2729032.png",
    title: "Karaokê",
    category: "Diversão em Família",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Recrum nisi alias ipsum, fugiat sed",
    url: "https://rocketseat.com.br",
  },
  {
    img: "https://cdn-icons-png.flaticon.com/512/2729/2729038.png",
    title: "Pintura",
    category: "Criatividade",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Recrum nisi alias ipsum, fugiat sed",
    url: "https://rocketseat.com.br",
  },
  {
    img: "https://cdn-icons-png.flaticon.com/512/2729/2729048.png",
    title: "Recortes",
    category: "Criatividade",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Recrum nisi alias ipsum, fugiat sed",
    url: "https://rocketseat.com.br",
  },
];

server.use(express.static("public"));

const nunjucks = require("nunjucks");
nunjucks.configure("views", {
  express: server,
  noCache: true,
});

server.get("/", function (req, res) {
  const reversedIdeas = [...ideas].reverse();

  let lastIdeas = [];
  for (let idea of reversedIdeas) {
    if (lastIdeas.length < 2) {
      lastIdeas.push(idea);
    }
  }

  return res.render("index.html", { ideas: lastIdeas });
});

server.get("/ideias", function (req, res) {
  const reversedIdeas = [...ideas].reverse();
  return res.render("ideias.html", { ideas: reversedIdeas });
});

server.listen(3000);
