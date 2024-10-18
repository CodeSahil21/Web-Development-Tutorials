//app.get("/health-cheacker",..we can pass on mutliple functions) 
// function(res,req,next) here next is use to tranfer control to the next function when current function completes it checks
//in methods after url whichever function next to it will get control first then with the help of next() control  gets transfer to  next function 

//middlewares are generally use for authenication check and user's input check
//
const express = require('express');
const app = express();

function userMiddleware(req, res, next) {
  if (!(user.username === 'johndoe' && user.password === 'pass')) {
    res.status(403).json({ msg: 'Incorrect input' });
  } else {
    next();
  }
}

function kidneyMiddleware(req, res, next) {
  if (kidneyId !== 1 && kidneyId !== 2) {
    res.status(483).json({ msg: 'Incorrect Inputs' });
  } else {
    next();
  }
}

app.get('/health-checkup', userMiddleware, kidneyMiddleware, function (req, res) {
  // do something with kidney here
  res.send('Your heart is healthy');
});

app.get('/kidney-check', userMiddleware, kidneyMiddleware, function (req, res) {
  // do something with kidney here
  res.send('Your heart is healthy');
});

app.get('/heart-check', userMiddleware, function (req, res) {
  // do something with user here
  res.send('Your heart is healthy');
});

// Other routes and middleware can be added as needed

app.listen(3000, () => {
  console.log('Server running on port 3000');
});
