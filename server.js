const express = require('express');
const request = require('request');
const bodyParser = require('body-parser')
const app = express();

var bigcommerceurl = 'https://api.bigcommerce.com/stores/uobqfamsuf/v3/';

var savecustomerurl = bigcommerceurl + 'customers';

var headers = {
    accept: 'application/json',
    'content-type': 'application/json',
    'X-Auth-Token': 'rba5je1x9en5y86r9us41f1u2ey8bgp'
};

app.use(bodyParser.json());

app.use(function(req, res, next) {
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    res.setHeader('Access-Control-Allow-Credentials', true);
    next();
});

app.get('/', (req, res) => {
    res.send('Demo App!')
});

app.post('/api/savecustomer', (req, res, next) => {

  //console.log(req.body);
    request({ url: savecustomerurl,
       headers: headers,
       json: req.body,
       method: 'POST'
       },
        function(error, response, body) {
          debugger;
            //console.log(error);
            res.send(body);
            //console.log(error);
        });
});


const port = process.env.port || 3000;
app.listen(port, () => {
    console.log(`From port ${port}`);
});