const { Router } = require("express");
// Importar todos los routers;
const getBreeds = require("./middleware/getBreeds");
const getTemperaments = require("./middleware/getTemperaments");
const router = Router();

// Configurar los routers
router.use("/dogs", getBreeds);
router.use("/temperaments", getTemperaments);

// [ ] GET /dogs?name="...":
// Obtener un listado de las primeras 8 razas de perro que contengan la palabra ingresada como query parameter
// Si no existe ninguna raza de perro mostrar un mensaje adecuado
// [ ] GET /dogs/{idRaza}:
// Obtener el detalle de una raza de perro en particular
// Debe traer solo los datos pedidos en la ruta de detalle de raza de perro
// Incluir los temperamentos asociados
// [ ] GET /temperament:
// Obtener todos los temperamentos posibles
// En una primera instancia deberán obtenerlos desde la API externa y guardarlos en su propia base de datos y luego ya utilizarlos desde allí
// [ ] POST /dog:
// Recibe los datos recolectados desde el formulario controlado de la ruta de creación de raza de perro por body
// Crea una raza de perro en la base de datos

// router.use("/", getBreeds);

module.exports = router;
