const { Router } = require("express");
const axios = require("axios").default;
const { Breed, Temper } = require("./../../db");
const router = Router();

router.get("/", async (req, res) => {
  // [ ] GET /dogs:
  // Obtener un listado de las primeras 8 razas de perro
  // Debe devolver solo los datos necesarios para la ruta principal
  axios.get(`http://api.thedogapi.com/v1/breeds`).then((breeds) => {
    // const newBreed = {
    //   name: "Luis",
    //   weight: 8 + "kg",
    //   height: 30 + "cm",
    //   life_span: "3-5 years",
    // };
    var breed;
    (async function hola() {
      if (
        Breed.findOne({
          where: {
            id: 1,
          },
        }).then((b) => {
          let breed = JSON.parse(JSON.stringify(b));
          return breed && breed.id === 1 && false;
        })
      ) {
        breeds.data.map((b) => {
          const newBreed = {
            name: b.name,
            weight: b.weight.imperial + "kg",
            height: b.weight.imperial + "cm",
            life_span: b.life_span,
            img: b.image.url,
          };
          Breed.create(newBreed);
        });
      }
    })();
    res.json(breeds.data.splice(0, 8));
  });
});

// router.post("/", async (req, res) => {
//   if (!req.body.title) {
//     res.status(400).send({
//       message: "Content can not be empty!",
//     });
//     return;
//   }

//   const temperament = req.body.temperament.split(", ");
//   const newBreed = {
//     name: req.body.name,
//     weight: req.body.weight.imperial + "kg",
//     weight: req.body.weight.imperial + "cm",
//     life_span: req.body.life_span,
//   };

//   Breed.Create(newBreed);

//   Tutorial.create(tutorial)
//     .then((data) => {
//       res.send(data);
//     })
//     .catch((err) => {
//       res.status(500).send({
//         message:
//           err.message || "Some error occurred while creating the Tutorial.",
//       });
//     });
// });
module.exports = router;
