const express = require('express');
const app = express();
const serieA = require('./serieA.json');
const cors = require("cors");
const corsOptions = {
   origin:'*', 
   credentials:true,
   optionSuccessStatus:200,
}

app.use(cors(corsOptions))

app.get('/api', (req, res) => {
    res.json(serieA);
});

app.get('/api/:squadra', (req, res) => {
    const { squadra } = req.params;
    res.json(serieA[squadra]);
});

app.listen(5000);