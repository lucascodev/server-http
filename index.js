const http = require("http");

const server = http.createServer((request, response) => {
  switch (request.url) {
    case "/about":
      response.write("About Hcode Treinamentos!");
      break;
    case "/":
      response.write("Hello Hcode Treinamentos!");
      break;

    default:
      response.write("Not found page!");
      break;
  }

  console.log("url", request.url);
  console.log("method", request.method);

  response.end();
});

server.listen(3000);
