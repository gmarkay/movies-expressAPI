const express = require('express');
const bodyParser = require('body-parser');
require('dotenv').config();

const app = express();

const routes = require('./routes/');

console.log('this is an express thing');

app.use('/api/v1/', routes);


app.use((req, res, next) => {
  let err = new Error("This resource was not found");
  console.log("This is telling you there's nothing here");
  err.status = 404;
  next(err);
});

app.use((err, req, res, next) => {
 res.status(err.status || 500);
  res.json({
    message: "This is handling my errors",
    err: err.message
  });
});

const port = process.env.PORT || 8080;

app.listen(port, () => {
  console.log(`listening in port ${port}`)
});