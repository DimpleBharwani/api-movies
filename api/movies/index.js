const express = require("express");
const router = express.Router();
var controller = require('./controller')

router.get('/', (req, res) => controller.getMovies(req, res));
router.get('/:id', (req, res) => controller.getMovie(req, res));

module.exports = router;



//// create, read, update, delete

////read
// router.get('/', (req, res) => {
//     res.send(films);
// });

// router.get('/:id', (req, res) => {
//     var id = req.body.id;
//     var film = films.find(movie => movie.ID === id);
//     return res.json(film);
// });

////create
// router.post('/', (req, res) => {
//     var title = req.body.title;
//     if (title != null) films.push({
//         id: films[films.length - 1].id + 1,
//         likes: 0,
//         title: title
//     })
// });

////update
// router.put('/', (req, res) => {
//     var id = req.body.id;
//     var film = films.find(movie => movie.ID === id);
//     if (film) {
//         film.likes++;
//         res.send(films);
//     } else res.send("Película no encontrada");
// });

////delete
// router.delete('/', (req, res) => {
//     var id = req.body.id;
//     var film = films.findIndex(movie => movie.ID == id);
//     if (film >= 0) films.splice(film, 1);
//     res.send(films);
// });

// module.exports = router;