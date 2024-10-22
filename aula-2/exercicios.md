## Exercício 1: Criar e Exportar Funções em um Módulo

Crie um módulo chamado `operacoes.js` que contenha três funções:

- **soma(a, b)**: retorna a soma de dois números.
- **subtrai(a, b)**: retorna a subtração de dois números.
- **multiplica(a, b)**: retorna a multiplicação de dois números.

Em outro arquivo, chamado `app.js`, importe o módulo `operacoes.js` e utilize cada uma das funções, imprimindo os resultados no console.

### Instruções:

1. Crie o arquivo `operacoes.js`.
2. Escreva as funções e exporte-as.
3. Crie o arquivo `app.js`.
4. Importe o módulo e teste as funções com valores diferentes.

---

## Exercício 2: Criar e Usar Múltiplos Módulos

Crie dois módulos:

- `matematica.js`, que exporta funções matemáticas como `quadrado(x)` e `cubo(x)`.
- `conversao.js`, que exporta funções para conversões de unidades, como `fahrenheitParaCelsius(f)` e `metrosParaKilometros(m)`.

No arquivo `app.js`, importe ambos os módulos e use todas as funções para testar diferentes valores, imprimindo os resultados no console.

### Instruções:

1. Crie `matematica.js` e `conversao.js`.
2. Escreva as funções necessárias e exporte-as.
3. Importe os dois módulos no arquivo `app.js` e utilize-os.

---

## Exercício 3: Usando Módulos Internos do Node.js

Crie um módulo chamado `infoSistema.js` que usa o módulo interno do Node.js `os` para obter e exportar as seguintes informações do sistema:

- O nome do sistema operacional.
- A quantidade de memória livre.
- A quantidade de memória total.

No arquivo `app.js`, importe o módulo `infoSistema.js` e imprima as informações obtidas no console.

### Instruções:

1. Crie o arquivo `infoSistema.js`.
2. Use o módulo `os` para obter as informações do sistema e exporte-as. `const os = require('os');`
3. Importe o módulo no `app.js` e imprima os resultados.
