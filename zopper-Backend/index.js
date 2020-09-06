const express = require('express');
const bodyParser = require('body-parser');
const app = express();
app.use(bodyParser.json());
const cors = require('cors');

app.use(cors({
    'allowedHeaders': ['Content-Type'],
    'origin': '*',
    'preflightContinue': true,
    'Access-Control-Allow-Origin': '*'
  }));

const RESPONSE_MODALS = {
    wrongParams: {
        message: "Givem data is invalid."
    },
    successFulSubmission: {
        message: "Details submitted"
    }
}

const port = 3000 || process.env.PORT; 

app.post("/submit-details" , (req,res) => {

    let body = req.body;
    if(!body.name || !body.search || !body.searchInput){
        res.json(RESPONSE_MODALS.wrongParams);
        return;
    } 
    res.json(RESPONSE_MODALS.successFulSubmission);
});

app.listen(port, () => {
    console.log("This server is listening on port "+port);
});
