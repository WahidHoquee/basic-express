const express = require("express");
const bodyParser = require("body-parser");

const app = express();

const menuRouter = require('./routes/menu');

app.use(bodyParser.urlencoded({extended: false}))


app.use("/", (req, resp, next) => {
    console.log("Hello from Console");
    next();
});

app.use('/get',menuRouter)

app.use("/", (req, resp, next) => {
    resp.send('<h1>Hello World from Express</h1>')
});

app.listen(5000); //It will do the server creation stuff internally
