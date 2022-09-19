const { Router } = require("express");
const axios = require("axios").default;
const { Breed, Temper, Op } = require("./../../db");
const router = Router();

router.get("/:id", async (req, res, next) => {
  console.log(req.params);
  let answer = await Breed.findAll({
    where: {
      id: req.params.id,
    },
    include: Temper,
  });
  res.status(200).json(answer);
});

router.get("/", async (req, res, next) => {
  if (!req.query.name) return next();
  let answer = await Breed.findAll({
    where: {
      name: {
        [Op.iLike]: `%${req.query.name}%`,
      },
    },
    include: Temper,
  });
  res.status(200).json(answer);
});

router.get("/", async (req, res, next) => {
  if (req.query.page >= 1) {
    let total = await Breed.count();
    let orderColum = req.query.orderColumn || "id";
    let order = req.query.order || "ASC";
    let page = req.query.page - 1;
    let offsetIndex = 8 * page;
    answer = await Breed.findAll({
      order: [[orderColum, order]],
      offset: offsetIndex,
      limit: 8,
      include: Temper,
      raw: false,
    });

    let jsonAnswer = JSON.parse(JSON.stringify(answer));
    jsonAnswer.push({ lastPage: Math.ceil(total / 8), actualPage: page + 1 });
    res.status(200).json(jsonAnswer);
    return;
  }
  next();
});

router.get("/", async (req, res) => {
  // [ ] GET /dogs:
  // Obtener un listado de las primeras 8 razas de perro
  // Debe devolver solo los datos necesarios para la ruta principal

  temperamentos = [];
  await axios.get(`http://api.thedogapi.com/v1/breeds`).then((breeds) => {
    //Crear temperamentos
    breeds.data.map((b) => {
      if (b.temperament)
        b.temperament.split(", ").map((t) => {
          temperamentos.push(t);
        });
    });
    const dataArr = new Set(temperamentos);
    let uniqueTempers = [...dataArr];

    uniqueTempers.map(async (t) => {
      const [temper, created] = await Temper.findOrCreate({
        where: {
          name: t,
        },
        defaults: {
          name: t,
        },
      });
    });
    //////////////////////////Temperamentos creados/////////////////////////////
    breeds.data.map(async (b) => {
      const newBreed = {
        name: b.name,
        weight: b.weight.imperial + " kg",
        height: b.weight.imperial + " cm",
        life_span: b.life_span,
        img: b.image.url,
      };
      const [breed, created] = await Breed.findOrCreate({
        where: {
          img: b.image.url,
        },
        defaults: newBreed,
      });
      let answer = await Breed.findAll({
        where: {
          img: b.image.url,
        },
        include: Temper,
      });
      let parsedAnswer = await JSON.parse(JSON.stringify(answer));

      if (b.temperament && parsedAnswer[0].tempers.length === 0) {
        const bTemperament = b.temperament.split(", ");
        try {
          await bTemperament.map(async (t) => {
            let busqueda = await Temper.findAll({
              where: {
                name: t,
              },
            });
            let idfinder = await JSON.parse(JSON.stringify(busqueda));

            await breed.setTempers(idfinder[0].id);
          });
        } catch (error) {
          return next(error);
        }
      }
    });
  });
  let orderColum = req.query.orderColumn || "id";
  let order = req.query.order || "ASC";
  let total = await Breed.count();
  let page = 0;
  let offsetIndex = 8 * page;
  let answer = await Breed.findAll({
    order: [[orderColum, order]],
    offset: offsetIndex,
    limit: 8,
    include: Temper,
    raw: false,
  });

  let jsonAnswer = await JSON.parse(JSON.stringify(answer));
  jsonAnswer.push({ lastPage: Math.ceil(total / 8), actualPage: page + 1 });
  res.status(200).json(jsonAnswer);
});

module.exports = router;
