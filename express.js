const express = require("express");

const app = express();

app.use("/", (req, resp, next) => {
    console.log("Hello from Console");
    next();
});

app.use("/menu-type", (req, resp, next) => {
    resp.send('<h1>Hello World from Menu Type</h1>')
});

app.use("/menu", (req, resp, next) => {
    resp.send('<h1>Hello World from Menu</h1>')
});


app.use("/", (req, resp, next) => {
    resp.send('<h1>Hello World from Express</h1>')
});

app.listen(5000); //It will do the server creation stuff internally
