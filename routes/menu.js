const express = require("express");
const router = express.Router()

router.get("/menu", (req, resp, next) => {
    resp.send('<form action="/get/menu" method="POST"><input type="text" name="title"/><button>Submit</button></form>')
});

router.post("/menu", (req, resp, next) => {
    console.log(req.body.title)
    resp.redirect('/')
});

module.exports = router;