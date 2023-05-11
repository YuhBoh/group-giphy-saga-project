import axios from "axios";
// import dotenv

// const GifyUrl = `http://api.giphy.com/v1/gifs/trending?api_key=${process.env.GIPHY_APY_KEY}&limit=3&rating=pg13`;

// router.get('/’, (req, res) => {
//     axios.get(GifyUrl)
//         .then((response) => {
//             console.log(‘process.env.GIPHY_APY_KEY:’, process.env.GIPHY_APY_KEY);
//             let url = response.data.data[0].images.downsized_medium.url;
//             let title = response.data.data[0].title;
//             res.send({ url: url, title: title });
//         })
//         .catch((err) => {
//             console.log(‘process.env.GIPHY_APY_KEY:’, process.env.GIPHY_APY_KEY);
//             console.log(err)
//             res.sendStatus(500);
//         })
// });
