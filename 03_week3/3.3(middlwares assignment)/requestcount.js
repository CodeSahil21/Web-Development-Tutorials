const express = require("express");
const app = express();
let requestcount = 0;
//you have been gib=ven an express server which has a few endpoints
//your task is to create a global middleware (app.use)which woll
//maintain a count of the number of requests made to the server in the global
//request count varaible
app.use(function(req,res,next){  
    requestcount = requestcount + 1;
    next();
});
app.get('/user', function(req, res) {
    res.status(200).json({ name: 'john' });
  });
  
  app.post('/user', function(req, res) {
    res.status(200).json({ msg: 'created dummy user' });
  });
  
  app.get('/requestCount', function(req, res) {
    res.status(200).json({ requestcount });
  });

  
  module.exports = app;