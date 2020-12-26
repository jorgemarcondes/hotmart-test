const path = require("path");
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const morgan = require("morgan");
const db = require("./database.config");

const Speakers = require("./models/Speaker");

const app = express();
app.use(morgan("combined"));
app.use(bodyParser.json());
app.use(cors());

app.get("/files/*", (req, res) => {
  if (!req.params[0]) res.status(500).send({ error: "Falta nome do arquivo" });

  res.sendFile(path.join(__dirname, `/../files/${req.params[0]}`));
});

app.get("/speakers", (req, res) => {
  const highlighted = req.query.highlighted;
  const condition = highlighted ? { highlighted } : {};

  Speakers.find(condition)
    .then(data => res.send(data))
    .catch(err =>
      res
        .status(500)
        .send({ message: "Ocorreu um erro ao tentar acessar palestrantes" })
    );
});

app.get("/speaker/:id", (req, res) => {
  const id = req.params.id;
  if (!id) {
    res.status(400).send({ message: "ID é obrigatório!" });
    return;
  }

  Speakers.findById(id)
    .then(data => res.send(data))
    .catch(err =>
      res
        .status(500)
        .send({ message: "Ocorreu um erro ao tentar acessar palestrantes" })
    );
});

app.post("/speaker", (req, res) => {
  if (!req.body.title) {
    res.status(400).send({ message: "Título é obrigatório!" });
    return;
  }

  const speaker = new Speakers({
    title: req.body.title,
    jobTitle: req.body.jobTitle,
    highlighted: req.body.highlighted,
    avatar: req.body.avatar
  });

  speaker
    .save()
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message: err.message || "Ocorreu um erro ao criar o palestrante."
      });
    });
});

app.put("/speaker", (req, res) => {
  if (!req.body) {
    return res.status(400).send({
      message: "Os dados não podem vir vazios!"
    });
  }

  const id = req.params.id;

  Speakers.findByIdAndUpdate(id, req.body, { useFindAndModify: false })
    .then(data => {
      if (!data) {
        res.status(404).send({
          message: `Palestrante com id=${id} não encontrado.`
        });
      } else {
        res.send({ message: "Palestrante atualizado com sucesso." });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: `Ocorreu um erro ao tentar atualizar palestrante, ID: ${id}`
      });
    });
});

app.delete("/speaker/:id", (req, res) => {
  const id = req.params.id;
  if (!id) {
    res.status(400).send({ message: "ID é obrigatório!" });
    return;
  }

  Speakers.findByIdAndDelete(id)
    .then(data => {
      if (!data) {
        res.status(404).send({
          message: `Palestrante com id=${id} não encontrado.`
        });
      } else {
        res.send({ message: "Palestrante deletado com sucesso!" });
      }
    })
    .catch(err =>
      res
        .status(500)
        .send({ message: "Ocorreu um erro ao tentar deletar palestrante" })
    );
});

app.listen(process.env.PORT || 8081);
