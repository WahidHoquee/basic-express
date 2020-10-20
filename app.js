const http = require('http');

//Creating a Server
//Callback will be called, When we send the Request from the browser.
//Request is sent from browser,Response is sent from nodejs server
const server = http.createServer((req,res) => {
    console.log(req.url)
    console.log(req.method)
    console.log(req.headers)
    // process.exit(); //It will stop listening to server
})

//Starting a Server
server.listen(3000);