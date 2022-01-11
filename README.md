# Agenz Exo
ma proposition pour l'exerice du Backend En utilisant Nodejs, Express js.

You can access the api under localhost:3000 



| Methods | Urls | Actions | Body 
| --- | --- | --- | --- |
| `POST` | /api/movie_id | Get movie by Id | {id:id} |
| `POST` | /api/Get_movies | Get Movies sorting by Year  | { orderBy : year, order : ASC/DSC} |
| `POST` | /api/getMovieByGenre | Get movies by genres    | { genre = ['genres'] } |
| `POST` | /api/AddMovie | Add a New Movie  | {title, year, runtime, genres, director, actors, plot, posterUrl} |
| `POST` | /api/between | Get movies between 2 dates    | { startyear = "1998", endyear:"2000" } |
| `POST` | /api/getMovieByRuntime | Get Movie by it's runtime | { runtime: 'runtime', operator: gte/lte } gte(>) means: greater than or equal and lte(<) |
| `GET` | /api/MoviesGenres | Get All Genres  | - |
| `GET` | /api/getAllMovies | Get All Movies | - |
| `PATCH` | /api/updateMovie/:movie_id | Update Movie by id  | header:{movie_id: id} body:{title, year, runtime, genres, director, actors, plot, posterUrl} |
| `DELETE` | /api/DeleteMovie/:movie_id | Delete Movie by id  | header:{movie_id: id} |






