const Router = require("express");
const router = Router();
const data = require("../movies-list.json");

const fs = require("fs");
const res = require("express/lib/response");

let rawdata = fs.readFileSync("movies-list.json");
let student = JSON.parse(rawdata);

router.post("/movie_id", async (req, res) => {
  const movies = data.movies;
  const id = req.body.id;

  const result = movies.find((movie) => {
    if (movie.id == id) {
      return true;
    }
  });
  res.send(result);
});

router.post("/Get_movies", async (req, res) => {
  const { orderBy, order } = req.body;
  const movies = data.movies;

  if (order === "ASC") {
    movies.sort((a, b) => {
      console.log("ASC");
      return a.year - b.year;
    });
  } else {
    movies.sort((a, b) => {
      console.log("DSC");
      return b.year - a.year;
    });
  }

  res.send(movies);
});

module.exports = router;
