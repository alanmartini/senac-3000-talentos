/*
3) Sistema de Avaliação
Crie uma função que determine se um aluno passou ou reprovou com base em duas notas. 
Para passar, o aluno deve ter uma média maior ou igual a 6 e não ter faltado em mais de 10% das aulas.
*/

let nota1 = 7;
let nota2 = 5;
let faltas = 8;
let totalAulas = 100;

// Verifique se o aluno passou ou reprovou

function avaliarAluno(nota1, nota2, faltas, totalAulas) {
  const media = (nota1 + nota2) / 2;
  const percentualFaltas = (faltas / totalAulas) * 100;

  if (media >= 6 && percentualFaltas <= 10) {
    return "Aprovado";
  } else {
    return "Reprovado";
  }
}

console.log(avaliarAluno(nota1, nota2, faltas, totalAulas));

// function calcularMedia(nota1, nota2) {
//   return (nota1 + nota2) / 2;
// }

// function calcularPercentualFaltas(faltas, totalAulas) {
//   return (faltas / totalAulas) * 100;
// }

// function avaliarAluno(nota1, nota2, faltas, totalAulas) {
//   const media = calcularMedia(nota1, nota2);
//   const percentualFaltas = calcularPercentualFaltas(faltas, totalAulas);

//   if (media >= 6 && percentualFaltas <= 10) {
//     return "Aprovado";
//   } else {
//     return "Reprovado";
//   }
// }

// console.log(avaliarAluno(nota1, nota2, faltas, totalAulas));
