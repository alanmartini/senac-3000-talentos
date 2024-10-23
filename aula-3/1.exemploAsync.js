function tarefaDemorada(callback) {
  console.log("Iniciando tarefa demorada..."); //3
  setTimeout(() => {
    const resultado = 42;
    console.log("Tarefa demorada concluída"); //4
    callback(resultado);
  }, 2000); // Simula uma tarefa que demora 2 segundos
}

console.log("Iniciando programa"); //1

tarefaDemorada((resultado) => {
  console.log("Resultado da tarefa:", resultado); //5
});

console.log("Fim do programa"); //2
