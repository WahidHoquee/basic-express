const http = require("http");
const fs = require("fs");

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.write("<html>");
    res.write("<head><title>Practice on Request & Response</title></head>");
    res.write(
      "<body><form action='/message' method='POST'><input type='text' name='message'/><button>Submit</button></form></body>"
    );
    res.write("</html>");
    return res.end();
  }

  if (req.url === "/message") {
    const body = [];
    req.on("data", chunk => {
      body.push(chunk); //Node Js by default divide these streams of data into chunk.For each chunk this callback is called
    });
    return req.on("end", () => {
      //Creating a buffer/collection of those chunks,We are considering the collection of all chunks of data.
      const parsedBody = Buffer.concat(body).toString();

      //Parsedbody was genarated in the form of object where the name of the input form is identifier and the value is whatever we submitted in that input field.
      //The output is in the form "message=Hello",To take the value after the '=' we had to split the string.
      const message = parsedBody.split("=")[0];

      //Creating a file on the Same directory of this code File
      fs.writeFile("message.txt", message, err => {
        res.statusCode = 302; //This status code handles redirect
        res.setHeader("Location", "/"); //This status code  the route in which it will redirect
        return res.end(); //To stop executing other response related code
      });
    });
  }

  //Response in the browser expect data according to the Content-Type in the Set Header
  res.setHeader("Content-Type", "text/html");
  res.write("<html>");
  res.write("<head><title>Practice on Request & Response</title></head>");
  res.write("<body><h1>This is default Response</h1></body>");
  res.write("</html>");
  res.end();
});

server.listen(7000);
