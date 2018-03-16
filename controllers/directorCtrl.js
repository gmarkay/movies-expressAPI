const { getAll, getOneDirector } = require('../models/Director');

module.exports.getDirectors = (req, res, next) => {
  getAll()
    .then((direx) => {
      res.status(200).json(direx);
    })
    .catch((err) => next(err));
};


module.exports.getDirector = (req, res, next) =>{
  let id = req.params.id
  getOneDirector(id)
  .then((direct)=>{
    res.status(200).json(direct);
  })
  .catch((err)=> next(err))
}