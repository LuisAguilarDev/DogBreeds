const { Router } = require("express");
const axios = require("axios").default;
const { Breed, Temper, Op } = require("./../../db");
const router = Router();

router.get("/:id", async (req, res, next) => {
  if (!req.params.id) return;
  let answer = await Breed.findAll({
    where: {
      id: req.params.id,
    },
    include: Temper,
  });
  res.status(200).json(answer);
});

router.post("/create", async (req, res, next) => {
  // console.log(req.body);
  let tempers = req.body.tempers;
  // console.log(tempers);
  const newBreed = {
    name: req.body.name,
    weight: req.body.weight + " kg",
    height: req.body.height + " cm",
    life_span: req.body.life_span,
    img: req.body.img,
    createdByUser: req.body.createdByUser,
  };

  console.log(newBreed);
  const created = await Breed.create(newBreed);
  if (!(tempers.length === 0)) {
    tempers.forEach(async (t) => {
      let busqueda = await Temper.findAll({
        where: {
          name: t,
        },
      });

      created.setTempers(busqueda[0].toJSON().id);
    });
  }
});

router.get("/", async (req, res, next) => {
  if (!req.query.createdBy) return next();
  let parameter;
  if (req.query.createdBy === "API") {
    parameter = false;
  }
  if (req.query.createdBy === "Created By Users") {
    parameter = true;
  }
  console.log(req.query);
  let page = req.query.page || 1;
  let offsetIndex = 8 * (page - 1);
  let total = await Breed.count({
    where: { createdByUser: parameter },
    include: Temper,
    offset: offsetIndex,
    limit: 8,
  });
  let answer = await Breed.findAll({
    where: { createdByUser: parameter },
    include: Temper,
    offset: offsetIndex,
    limit: 8,
  });
  let parsedAnswer = answer.map((b) => b.toJSON());
  parsedAnswer.push({ lastPage: Math.ceil(total / 8), actualPage: page });
  res.status(200).json(parsedAnswer);
});

router.get("/", async (req, res, next) => {
  if (
    !req.query.temper ||
    !req.query.order ||
    !req.query.orderColumn ||
    !req.query.page
  ) {
    return next();
  }
  let orderColumn = req.query.orderColumn;
  let order = req.query.order;
  let page = req.query.page || 1;
  let offsetIndex = 8 * (page - 1);
  let total = await Breed.count({
    include: [
      {
        model: Temper,
        where: { name: req.query.temper },
      },
    ],
  });
  let finderId = await Breed.findAll({
    order: [[orderColumn, order]],
    include: [
      {
        model: Temper,
        where: { name: req.query.temper },
      },
    ],
    offset: offsetIndex,
    limit: 8,
  });
  let finderIdParsed = finderId.map((b) => b.toJSON());
  let id = [];
  finderIdParsed.forEach((b) => {
    id.push({ id: b.id });
  });
  let answer = await Breed.findAll({
    where: {
      [Op.or]: id,
    },
    order: [[orderColumn, order]],
    include: Temper,
  });
  let parsedAnswer = answer.map((b) => b.toJSON());
  parsedAnswer.push({ lastPage: Math.ceil(total / 8), actualPage: page });
  res.status(200).json(parsedAnswer);
});

router.get("/", async (req, res, next) => {
  if (!req.query.temper) return next();
  let page = req.query.page || 1;
  let offsetIndex = 8 * (page - 1);
  let total = await Breed.count({
    include: [
      {
        model: Temper,
        where: { name: req.query.temper },
      },
    ],
  });
  let finderId = await Breed.findAll({
    include: [
      {
        model: Temper,
        where: { name: req.query.temper },
      },
    ],
    offset: offsetIndex,
    limit: 8,
  });
  let finderIdParsed = finderId.map((b) => b.toJSON());
  let id = [];
  finderIdParsed.forEach((b) => {
    id.push({ id: b.id });
  });
  let answer = await Breed.findAll({
    where: {
      [Op.or]: id,
    },
    include: Temper,
  });
  let parsedAnswer = answer.map((b) => b.toJSON());
  parsedAnswer.push({ lastPage: Math.ceil(total / 8), actualPage: page });
  res.status(200).json(parsedAnswer);
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
  console.log(req.query);
  if (req.query.page >= 1) {
    // let orderColum = req.query.orderColumn || "id";
    // let order = req.query.order || "ASC";
    // let page = req.query.page - 1;
    let orderColumn = req.query.orderColumn || "id";
    let order = req.query.order || "ASC";
    let page = req.query.page;
    let offsetIndex = 8 * (page - 1);
    let total = await Breed.findAll({
      order: [[orderColumn, order]],
      include: Temper,
    });
    answer = await Breed.findAll({
      order: [[orderColumn, order]],
      offset: offsetIndex,
      limit: 8,
      include: Temper,
      raw: false,
    });
    let answerParsed = await answer.map((b) => {
      return b.toJSON();
    });
    let totalParsed = await total.map((b) => {
      return b.toJSON();
    });
    let total2 = await totalParsed.length;
    answerParsed.push({ lastPage: Math.ceil(total2 / 8), actualPage: page });
    res.status(200).json(answerParsed);
    return;
  }
  next();
});

router.get("/", async (req, res) => {
  // [ ] GET /dogs:
  // Obtener un listado de las primeras 8 razas de perro
  // Debe devolver solo los datos necesarios para la ruta principal
  // let orderColum = req.query.orderColumn || "id";
  // let order = req.query.order || "ASC";
  let orderColum = "id";
  let order = "ASC";
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
  await Promise.all(answer);
  let jsonAnswer = await JSON.parse(JSON.stringify(answer));
  jsonAnswer.push({ lastPage: Math.ceil(total / 8), actualPage: page + 1 });
  res.status(200).json(jsonAnswer);
});

module.exports = router;
