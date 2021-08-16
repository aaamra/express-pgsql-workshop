const express = require("express");

const {getData, postData} = require('../database/queries');

const router = express.Router();

router.get("/users", (req, res) => {
  
  getData()
  .then(({rows}) => {
    res.json(rows);
  }).catch(err => res.status(500).json({msg : 'Internal Server Error'}));

});

router.post('/create-user', (req,res) => {

  const name = req.body.name;
  const location = req.body.location;

  postData({name, location})
  .then(data => {

    res.redirect('/');

  }).catch(err => res.status(500).json({msg : 'Internal Server Error'}));

});

module.exports = router;
