const express = require("express");
const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");
const morgan = require("morgan");
const routes = require("./routes/index.js");
const axios = require("axios").default;
const { Breed, Temper, Op } = require("./db");

require("./db.js");

const server = express();

server.name = "API";

server.use(bodyParser.urlencoded({ extended: true, limit: "50mb" }));
server.use(bodyParser.json({ limit: "50mb" }));
server.use(cookieParser());
server.use(morgan("dev"));
server.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "http://localhost:3000"); // update to match the domain you will make the request from
  res.header("Access-Control-Allow-Credentials", "true");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, DELETE");
  next();
});

server.use(async (req, res, next) => {
  let breeds = await Breed.count();
  let tempers = await Temper.count();
  temperamentos = [];
  if (breeds > 100 && tempers > 100) return next();
  temperamentos = [];
  temperamentosObj = [];
  await axios.get(`http://api.thedogapi.com/v1/breeds`).then(async (breeds) => {
    // Crear temperamentos
    let cuentaT = await Temper.count();
    if (cuentaT < 10) {
      breeds.data.map((b) => {
        if (b.temperament)
          b.temperament.split(", ").map((t) => {
            temperamentos.push(t);
          });
      });
      const dataArr = new Set(temperamentos);
      let uniqueTempers = [...dataArr];

      uniqueTempers.map((n, i) => {
        temperamentosObj.push({ id: i, name: n });
      });
      Temper.bulkCreate(temperamentosObj);
    }
    //////////////////////////Temperamentos creados/////////////////////////////
    let BreedsObj = [];
    let cuentaB = await Breed.count();
    if (cuentaB < 10) {
      breeds.data.map(async (b) => {
        const newBreed = {
          name: b.name,
          weight: b.weight.imperial + " kg",
          height: b.weight.imperial + " cm",
          life_span: b.life_span,
          img: b.image.url,
        };
        BreedsObj.push(newBreed);
      });
      Breed.bulkCreate(BreedsObj);
    }
    /////////////////////////Razas Creadas//////////////////////////////////////
    //findAll retorna Arrays
    let promise = breeds.data.map(async (b) => {
      const breed = await Breed.findAll({
        where: {
          img: b.image.url,
        },
        include: Temper,
      });
      const amountTempers = await breed[0]?.toJSON()?.tempers.length;
      if (b.temperament && amountTempers === 0) {
        const bTemperament = b.temperament.split(", ");
        bTemperament.map(async (t) => {
          let busqueda = await Temper.findAll({
            where: {
              name: t,
            },
          });
          let idfinder = JSON.parse(JSON.stringify(busqueda));
          breed[0].setTempers(idfinder[0].id);
        });
      }
    });
    //////////////////////////Estado INICIAL////////////////////////////////////////////////
    const hola = await Promise.all(promise);
    next();
  });
});

server.use(routes);
// server.use("/dogs", getBreeds);
// server.use("/temperaments", getTemperaments);

// Error catching endware.
server.use((err, req, res, next) => {
  // eslint-disable-line no-unused-vars
  const status = err.status || 500;
  const message = err.message || err;
  console.error(err);
  res.status(status).send(message);
});

module.exports = server;
