const fs = require("fs");

// lendo arquivos
fs.readFile("./docs/blog.txt", (err, data) => {
  if (err) {
    console.log(err);
  }
  console.log(data.toString());
});

// console.log('última linha');

// escrevendo arquivos
// fs.writeFile("./docs/blog.txt", "olá, mundo", () => {
//   console.log("arquivo foi escrito");
// });

// fs.writeFile("./docs/blog2.txt", "olá, novamente", () => {
//   console.log("arquivo foi escrito");
// });

// // diretórios
// if (!fs.existsSync("./assets")) {
//   fs.mkdir("./assets", (err) => {
//     if (err) {
//       console.log(err);
//     }
//     console.log("pasta criada");
//   });
// } else {
//   fs.rmdir("./assets", (err) => {
//     if (err) {
//       console.log(err);
//     }
//     console.log("pasta deletada");
//   });
// }

// // deletando arquivos
// if (fs.existsSync("./docs/deleteme.txt")) {
//   fs.unlink("./docs/deleteme.txt", (err) => {
//     if (err) {
//       console.log(err);
//     }
//     console.log("arquivo deletado");
//   });
// }
