const http = require("http");
const fs = require("fs");

const server = http.createServer((req, res) => {
  // seta o conteúdo do header content type
  res.setHeader("Content-Type", "text/html");

  // rotas
  /* 
    o caminha de arquivos muda relativamente de onde está sendo chamado 
    se a chamada node server.js for executado na pasta aula-4, o caminhoArquivo = './views/'
    se for executado na pasta acima (senac-3000-talentos), o caminhoArquivo = './aula-4/views/'
  */
  let caminhoArquivo = __dirname + "/views/";
  switch (req.url) {
    case "/":
      caminhoArquivo += "index.html";
      res.statusCode = 200;
      break;
    case "/about":
      caminhoArquivo += "about.html";
      res.statusCode = 200;
      break;
    case "/about-us":
      res.statusCode = 301;
      res.setHeader("Location", "/about");
      res.end();
      break;
    default:
      caminhoArquivo += "404.html";
      res.statusCode = 404;
  }

  // retorna o conteudo do arquivo especificado
  fs.readFile(caminhoArquivo, (err, data) => {
    if (err) {
      console.log(err);
      res.end();
    }
    //res.write(data);
    res.end(data);
  });
});

// localhost é o valor padrão para o 2 argumento
server.listen(3000, "localhost", () => {
  console.log("listening for requests on port 3000");
});
