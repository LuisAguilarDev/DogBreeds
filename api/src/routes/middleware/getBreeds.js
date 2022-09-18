const { Router } = require("express");
const axios = require("axios").default;
const { Breed, Temper } = require("./../../db");
const router = Router();

router.get("/", async (req, res) => {
  // [ ] GET /dogs:
  // Obtener un listado de las primeras 8 razas de perro
  // Debe devolver solo los datos necesarios para la ruta principal

  temperamentos = [];
  axios.get(`http://api.thedogapi.com/v1/breeds`).then(async (breeds) => {
    //Crear temperamentos
    let tempers = await breeds.data.map((b) => {
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
        const bTemperament = await b.temperament.split(", ");
        try {
          bTemperament.map(async (t) => {
            let busqueda = await Temper.findAll({
              where: {
                name: t,
              },
            });
            idfinder = await JSON.parse(JSON.stringify(busqueda));

            let result = await breed.setTempers(idfinder[0].id);
          });
        } catch (error) {
          console.log(error);
        }
      }
    });

    //
    // } catch (error) {
    //   console.log(error);
    // }
    let total = await Breed.count();
    console.log(total);
    let page = req.query.page - 1;
    let offsetIndex = 8 * page;
    answer = await Breed.findAll({
      order: [["id", "ASC"]],
      offset: offsetIndex,
      limit: 8,
      include: Temper,
      raw: false,
    });
    let jsonAnswer = JSON.parse(JSON.stringify(answer));
    jsonAnswer.push({ lastPage: Math.ceil(total / 8), actualPage: page + 1 });
    res.status(200).json(jsonAnswer);
  });
});

module.exports = router;
