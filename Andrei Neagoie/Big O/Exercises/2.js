// What is the Big O of the below function? (Hint, you may want to go line by line)
function anotherFunChallenge(input) {
    let a = 5; //0(1) - Roda somente uma vez durante a execução da função
    let b = 10;  //0(1) - Roda somente uma vez durante a execução da função
    let c = 50;  //0(1) - Roda somente uma vez durante a execução da função

    for (let i = 0; i < input; i++) {
      let x = i + 1;  // O(n) - A exec. depende do número de elementos do input 
      let y = i + 2; // O(n) - A exec. depende do número de elementos do input - 1
      let z = i + 3; // O(n) - A exec. depende do número de elementos do input - 1  
    }

    for (let j = 0; j < input; j++) {
      let p = j * 2; // O(n) - A exec. depende do número de elementos do input - 1
      let q = j * 2; // O(n) - A exec. depende do número de elementos do input - 1
    }

    let whoAmI = "I don't know"; //0(1) - Roda somente uma vez durante a execução da função
  }

  //Big O(4 + 5n) -> Simple O(n)