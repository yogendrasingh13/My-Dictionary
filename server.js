const express = require('express')
const app = express()
const path = require("path")
const port = 3000

app.get('/', (req, res) => {
  return res.sendFile('public/index.html', { root : __dirname});
})

app.get('/searchword', (req, res) => {
  // res.send('Hello World!')
  console.log(req.params)
  var axios = require("axios")

var options = {
  method: 'GET',
  url: 'https://mashape-community-urban-dictionary.p.rapidapi.com/define',
  params: {term: 'enjoy'},
  headers: {
    'X-RapidAPI-Key': 'e35673d199mshc5e1a7c1791a13dp1608f5jsn291e7c19ab95',
    'X-RapidAPI-Host': 'mashape-community-urban-dictionary.p.rapidapi.com'
  }
};

// axios.request(options).then(function (response) {
//   console.log(response.data);
// }).catch(function (error) {
//   console.error(error);
// });
    console.log(response.data);
   res.json(response.data)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port} - http://localhost:3000`) 
})