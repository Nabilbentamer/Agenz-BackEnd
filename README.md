# Blood_Inventory
ma proposition pour l'exerice du Backend En utilisant Nodejs, Express js.

You can access the api under localhost:3000 



| Methods | Urls | Actions | Body 
| --- | --- | --- | --- |
| `POST` | /api/movie_id | Get movie by Id | body = {id:id} |
| `POST` | /api/Get_movies | Get Movies sorting by Year  | { orderBy : year, order : ASC/DSC} |
| `POST` | /api/getMovieByGenre | Get movies by genres    | { genre = ['genres'] } |
| `POST` | /api/AddMovie | Add a New Movie  | {title, year, runtime, genres, director, actors, plot, posterUrl} |
| `GET` | /api/MoviesGenres | Get All Genres  | nothing |
| `GET` | /api/getAllMovies | Get All Movies | nothing |
| `GET` | /api/getMovieByRuntime | Get Movie by it's runtime | { runtime: 'runtime', operator: gte/lte gte: greater than or equal |
| `PATCH` | /api/updateMovie/:movie_id | Update Movie by id  | header:{movie_id: id} |
| `DELETE` | /api/DeleteMovie/:movie_id | Delete Movie by id  | header:{movie_id: id} |






