const express = require('express');
const axios = require('axios');
const cors = require('cors');


let app = express();
app.use(express.json());
app.use(cors());

axios({
  method: 'get',
  url: 'https://gist.githubusercontent.com/fg-uulm/666847dd7f11607fc2b6234c6d84d188/raw/2ca994ada633143903b10b2bf7ada3fd039cae35/mensa.json',
  responseType: "json"
})
  .then(function (response) {
    const data = response.input;
    console.log (data); 
    input = data;
  });

//Params - REST-artig
app.get('/user/:uid', function (req, res) {
    res.send("User ID is set to " + req.params.uid);
    //tu was
});

app.get('/mensa/:day', function (req, res) {
  if (req.params.day === 'Montag') {
    res.send(input);
  } else {
    res.status(404).send('404');
  }
  // tu was
});

//Server starten
app.listen(3000, function () {
    console.log('Example app listening on port 3000!');
});
