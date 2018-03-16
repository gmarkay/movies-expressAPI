const { getAll, getOneMovie } = require('../models/Movie');

module.exports.getAllMovies = (req, res, next) => {
  getAll()
    .then((movies) => {
      res.status(200).json(movies);
    })
    .catch((err) => {
      next(err);
    })
};

module.exports.getMovie = (req, res, next) =>{
  let id = req.params.id
  getOneMovie(id)
  .then((movie)=>{
    if (movie){
    res.status(200).json(movie);
    }else{
      let error = new Error("404: Movie not found")
      next(error);
    }
  })
  .catch((err)=> next(err));
}