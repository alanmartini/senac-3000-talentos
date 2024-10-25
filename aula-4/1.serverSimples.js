const http = require("http");

// Cria um servidor HTTP que, a cada requisição, executa a função
// que é passada como parâmetro para http.createServer().
const server = http.createServer((req, res) => {
  // A variável req (request) representa a requisição recebida pelo
  // servidor e contém informações sobre a requisição, como o método
  // (GET, POST, PUT, DELETE, etc.), a URL, os cabeçalhos, etc.

  // A variável res (response) representa a resposta que o servidor
  // enviará para o cliente e contém métodos para enviar a resposta,
  // como o método writeHead() para enviar os cabeçalhos e o método
  // end() para enviar o conteúdo da resposta.

  console.log("Requisição recebida!");
  console.log("Parâmetros da requisição:");

  // Mostra o método da requisição (GET, POST, PUT, DELETE, etc.)
  console.log("Método:", req.method);

  // Mostra a URL da requisição
  console.log("URL:", req.url);

  // Mostra os cabeçalhos da requisição
  console.log("Cabeçalhos:", req.headers);

  res.setHeader("Content-Type", "text/plain");

  // teste mudar o header de resposta
  //res.setHeader("Content-Type", "text/html");

  res.write("<p>hello world</p>");
  res.write("<p>Teste som</p>");

  res.statusCode = 200;
  res.end("Request recebida e retornada com sucesso!");
});

// Inicia o servidor na porta 3000 e executa o callback quando o servidor
// estiver pronto para receber requisições.
server.listen(3000, () => {
  console.log("Servidor iniciado na porta 3000!");
});
