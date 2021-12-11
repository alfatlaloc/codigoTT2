const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const path = require('path');


const app = express();
const port = 8080;

app.use(cors(), bodyParser(), bodyParser.urlencoded({ extended: true }));

app.use(
    express.json({
        type: ["application/json", "text/plain"],
    })
);

app.options("*", (req, res) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Headers", "Content-Type"); // Add other headers here
    res.setHeader("Access-Control-Allow-Methods", "POST"); // Add other methods here
    res.send();
});

app.listen(port, console.log("listening on port ", port));


app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname, './home.html'));
});


const EURUSD = require("./Routes/Year");
app.use("/Year", EURUSD);

const EURUSDM = require("./Routes/Month");
app.use("/Month", EURUSDM);

const EURUSDW = require("./Routes/Week");
app.use("/Week", EURUSDW);

const EURUSDD = require("./Routes/Day");
app.use("/Day", EURUSDD);

const EURUSDH = require("./Routes/Hour");
app.use("/Hour", EURUSDH);