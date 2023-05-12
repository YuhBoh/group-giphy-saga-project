const express = require('express');
const router = new express.Router();
const axios = require('axios');
require('dotenv').config();

// let userInput ='cat'

let GifyUrl = `http://api.giphy.com/v1/gifs/search?api_key=Y0ZaaAP2UryTmYayhv2yOJChsoDiiPqH&limit=3&rating=pg13&q=cat`;

// [0].images.downsized_medium.url
// [0].title
//search url 
//api.giphy.com/v1/gifs/search

router.get('/', (req, res) => {

    axios.get(GifyUrl)
        .then((response) => {
            console.log('this is the response',response);
            // console.log('process.env.GIPHY_APY_KEY:', process.env.GIPHY_APY_KEY);
            let dataArray = response.data.data;
           
            res.send({ dataArray });
        })
        .catch((err) => {
            // console.log('process.env.GIPHY_APY_KEY:', process.env.GIPHY_APY_KEY);
            console.log(err)
            res.sendStatus(500);
        })
});

router.post('/', (req, res) => {
    const searchElement = req.body;
  console.log('this is the new search-->',searchElement);
   GifyUrl = `http://api.giphy.com/v1/gifs/search?api_key=Y0ZaaAP2UryTmYayhv2yOJChsoDiiPqH&limit=3&rating=pg13&q=${searchElement.newSearch}`;
  res.sendStatus(201)
  });

module.exports = router;

