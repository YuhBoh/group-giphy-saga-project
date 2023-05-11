const express = require('express');
const router = new express.Router();
const axios = require('axios');
require('dotenv').config();

const GifyUrl = `http://api.giphy.com/v1/gifs/search?api_key=Y0ZaaAP2UryTmYayhv2yOJChsoDiiPqH&limit=3&rating=pg13&q=cat`;


//search url 
//api.giphy.com/v1/gifs/search

router.get('/', (req, res) => {

    axios.get(GifyUrl)
        .then((response) => {

            // console.log('process.env.GIPHY_APY_KEY:', process.env.GIPHY_APY_KEY);
            let url = response.data.data[0].images.downsized_medium.url;
            let title = response.data.data[0].title;
            res.send({ url: url, title: title });
        })
        .catch((err) => {
            // console.log('process.env.GIPHY_APY_KEY:', process.env.GIPHY_APY_KEY);
            console.log(err)
            res.sendStatus(500);
        })
});



module.exports = router;

