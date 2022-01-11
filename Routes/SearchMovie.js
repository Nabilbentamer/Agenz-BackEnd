const Router = require("express");
const { check, validationResult } = require("express-validator");

const router = Router();
const data = require("../movies-list.json");
const movies = data.movies;

const fs = require("fs");
const res = require("express/lib/response");
const { route } = require("express/lib/application");

let rawdata = fs.readFileSync("movies-list.json");
let student = JSON.parse(rawdata);

const ToLowerCase = (arr) => {
  const loweredArray = arr.map((word) => word.toLowerCase());
  return loweredArray;
};

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

  if (order === "ASC") {
    movies.sort((a, b) => {
      return a.year - b.year;
    });
  } else {
    movies.sort((a, b) => {
      return b.year - a.year;
    });
  }

  res.send(movies);
});

router.post("/getMovieByGenre/", async (req, res) => {
  const genre = req.body.genre;

  const result = movies.filter(function (movie) {
    const movie_genres = ToLowerCase(movie.genres);
    var test = false;
    genre.map((single_genre) => {
      if (movie_genres.indexOf(single_genre) > -1) {
        test = true;
      }
    });
    if (test == true) {
      return true;
    } else {
      return false;
    }
  });

  if (result) {
    res.status(200).send({
      success: true,
      data: result,
    });
  } else {
    res.status(404).send({ success: false });
  }
});

router.post("/AddMovie", async (req, res) => {
  const { title, year, runtime, genres, director, actors, plot, posterUrl } =
    req.body;

  const id = Math.floor(Math.random() * 100);

  fs.readFile("movies-list.json", "utf8", function readFileCallback(err, data) {
    if (err) {
      res.send(err);
    } else {
      obj = JSON.parse(data); //now it an object
      obj.movies.push({
        id: id,
        title: title,
        year: year,
        runtime: runtime,
        genres: genres,
        director: director,
        actors: actors,
        plot: plot,
        posterUrl: posterUrl,
      });
      //add some data
      json = JSON.stringify(obj); //convert it back to json
      fs.writeFile("movies-list.json", json, "utf8", function test(err, data) {
        res.send({
          success: true,
          message: "Movie has beeen Addeed Succeffuly",
        });
      });
    }
  });
});

router.delete("/DeleteMovie/:movie_id", async (req, res) => {
  let deleted_movie = [];
  fs.readFile("movies-list.json", "utf8", function readFileCallback(err, data) {
    obj = JSON.parse(data);
    deleted_movie = obj.movies.filter(function (item) {
      if (item.id == req.params.movie_id) {
        return false;
      } else {
        return true;
      }
    });
    obj.movies = deleted_movie;
    json = JSON.stringify(obj); //convert it back to json
    fs.writeFile("movies-list.json", json, "utf8", function test(err, data) {
      res.send({
        success: true,
        message: "Movie has beeen deleted Succeffuly",
      });
    });
  });
});

router.patch("/updateMovie/:movie_id", async (req, res) => {
  const { title, year, runtime, genres, director, actors, plot, posterUrl } =
    req.body;

  const id = req.params.movie_id;

  fs.readFile("movies-list.json", "utf8", function readFileCallback(err, data) {
    obj = JSON.parse(data);
    deleted_movie = obj.movies.map(function (item) {
      if (item.id == id) {
        item.title = title;
        item.year = year;
        item.runtime = runtime;
        item.genres = genres;
        item.director = director;
        item.actors = actors;
        item.plot = plot;
        item.posterUrl;
      }
    });
    json = JSON.stringify(obj); //convert it back to json
    fs.writeFile("movies-list.json", json, "utf8", function test(err, data) {
      res.send({
        success: true,
        message: "Movie has beeen updated Succeffuly",
      });
    });
  });
});
/**************************  GET REQUEST **********************/
router.get("/MoviesGenres", async (req, res) => {
  const genres = data.genres;

  res.status(200).send({
    success: true,
    data: genres,
  });
});

router.get("/getAllMovies", async (req, res) => {
  res.status(200).send({
    success: true,
    data: movies,
  });
});

router.get("/getMovieByRuntime/:runtime/:operator", async (req, res) => {
  const runtime = req.params.runtime;
  const operator = req.params.operator;

  const result = movies.filter(function (movie) {
    if (operator === "gte") {
      return parseInt(movie.runtime) > runtime;
    } else if (operator === "lte") {
      return parseInt(movie.runtime) < runtime;
    }
  });

  if (result) {
    res.status(200).send({
      success: true,
      data: result,
    });
  } else {
    res.status(404).send({ success: false });
  }
});

module.exports = router;
