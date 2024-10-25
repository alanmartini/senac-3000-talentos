# Aula 04 - Requests & Responses

## Como funciona um servidor localhost rodando em Node.js

Um servidor localhost em Node.js é uma aplicação que escuta requisições HTTP em uma porta específica no seu computador. Isso é útil para desenvolvimento e testes locais antes de implantar a aplicação em um servidor real.

### Exemplo de código

Aqui está um exemplo simples de como criar um servidor HTTP usando Node.js:

```javascript
const http = require("http");

const server = http.createServer((req, res) => {
  console.log("Requisição recebida!");
  res.statusCode = 200;
  res.setHeader("Content-Type", "text/plain");
  res.end("Olá, mundo!");
});

server.listen(3000, () => {
  console.log("Servidor rodando em http://localhost:3000/");
});
```

### Descrição

1. **Importação do módulo HTTP**: O módulo `http` é usado para criar o servidor.
2. **Criação do servidor**: `http.createServer()` cria um servidor que executa uma função callback para cada requisição recebida.
3. **Manipulação de requisições**: A função callback recebe dois objetos, `req` (requisição) e `res` (resposta), que são usados para manipular e responder às requisições.
4. **Iniciando o servidor**: `server.listen(3000)` faz com que o servidor escute a porta 3000.

Ao acessar `http://localhost:3000/` no navegador, a mensagem "Olá, mundo!" será exibida.

# Importante

<span style="font-size: 33px">Para as mudanças no código surtirem efeito, é necessário re-iniciar o servidor `node NomeDoArquivo.js`</span>

```
### Tipos de Requisições

| Tipo de Requisição | Descrição                                     | Exemplo |
| ------------------ | --------------------------------------------- | ------- |
| GET                | Recupera um recurso                           | `GET /api/recursos/1` |
| POST               | Cria um recurso                               | `POST /api/recursos` com corpo da requisição JSON |
| PUT                | Atualiza um recurso                           | `PUT /api/recursos/1` com corpo da requisição JSON |
| DELETE             | Exclui um recurso                             | `DELETE /api/recursos/1` |
| OPTIONS            | Retorna os métodos permitidos para um recurso | `OPTIONS /api/recursos` |

### Principais Headers

| Header            | Descrição                                | Exemplo |
| ----------------- | ---------------------------------------- | --- |
| `Content-Type`    | Tipo de conteúdo da requisição           | `application/json` |
| `Accept`          | Tipo de conteúdo aceito pela requisição  | `application/json` |
| `Accept-Language` | Idioma aceito pela requisição            | `pt-BR` |
| `Authorization`   | Autenticação da requisição               | `Bearer <token>` |
| `Host`            | Nome do host da requisição               | `localhost:3000` |
| `Referer`         | URL da página que fez a requisição       | `http://example.com` |
| `User-Agent`      | Informações sobre o navegador ou cliente | `Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/58.0.3029.110 Safari/537.3` |
```
