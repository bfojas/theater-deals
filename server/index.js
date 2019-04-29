const express = require('express');
const bodyParser = require('body-parser'); 
require("dotenv").config();
const axios = require('axios')

const app = express()

app.use(bodyParser.json())

// let config = {headers :  {Authorization: `Bearer ${process.env.YELP_KEY}`}}
app.get("/api/get", 
// searchController.getList)
(req,res) => {
    axios.get("https://api.yelp.com/v3/businesses/search?latitude=37.7670169511878&longitude=-122.42184275&categories=movietheaters", {headers :  {Authorization: `Bearer ${process.env.YELP_KEY}`}}
   
    )
    .then(response => {
        console.log('response',response.data)
        res.status(200).json(response.data)
    })
    .catch(error => console.log("api error", error))
})


const PORT = 4000;
app.listen(PORT, console.log(`Server listening on port ${PORT}`));
