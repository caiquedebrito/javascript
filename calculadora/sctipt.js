const painel = document.getElementsByClassName("painel")[0];
const buttons = document.querySelectorAll("button");
const erro = document.getElementById("erro");

// Inserir valores no painel/tela
for (let btn of buttons) {
  btn.addEventListener("click", () => {
    painel.textContent += btn.value;
  });
}

function calculate() {
  const r = /\D/g; //Captura sinais
  let operation = painel.textContent
    .match(r)
    .filter((sin) => sin && sin !== "."); //filtra os espaços e pontos
  const r2 = /(\d\.\d|\d+)/g; // Captura números
  let numbers = painel.textContent.match(r2).filter((n) => n && n !== "."); //filtra os espaços e pontos

  const r3 = /^\-\w+/; //Expressões negativas: -2+3

  const startCalculation = () => {
    painel.textContent = "";
    const operator = ["/", "*", "+", "-"];

    for (let op of operator) {
      let index = operation.indexOf(op);
      while (index >= 0) {
        // Faz as operções matemáticas
        let result;
        if (op === "/") {
          result =
            parseFloat(numbers[index], 10) / parseFloat(numbers[index + 1], 10);
        } else if (op === "*") {
          result =
            parseFloat(numbers[index], 10) * parseFloat(numbers[index + 1], 10);
        } else if (op === "+") {
          result =
            parseFloat(numbers[index], 10) + parseFloat(numbers[index + 1], 10);
        } else if (op === "-") {
          result =
            parseFloat(numbers[index], 10) - parseFloat(numbers[index + 1], 10);
        }

        // Remove o sinal utilizado no cálculo
        operation.splice(index, 1);
        // Remove números utilazados no cálculo e adiciona o resultado da operação
        numbers.splice(index, 2, result);

        // Verifica se o sinal ainda está disponível na array sinais
        index = operation.indexOf(op);
      }
    }

    // Inseri o resultado na tela/painel
    painel.textContent = numbers;
  };

  // Filtro das expressões válidas
  if (operation.length === numbers.length && r3.test(painel.textContent)) {
    numbers[0] = "-" + numbers[0];
    operation.shift();
    clearMessage();
    startCalculation();
  } else if (operation.length < numbers.length) {
    clearMessage();
    startCalculation();
  } else {
    erro.innerText = "Sintax Error!";
  }
}

function clearExpression() {
  let expression = painel.textContent.split("");
  expression.pop();
  painel.textContent = expression.join("");
}

function clearAll() {
  painel.textContent = "";
}

function clearMessage() {
  erro.innerText = "";
}
