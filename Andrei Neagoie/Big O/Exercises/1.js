// What is the Big O of the below function? (Hint, you may want to go line by line)
function funChallenge(input) {
    let a = 10; //0(1) - Roda somente uma vez durante a execução da função
    a = 50 + 3; //0(1) - Roda somente uma vez durante a execução da função
  
    for (let i = 0; i < input.length; i++) { //O(x) - A exec. depende do número de elementos do input
      anotherFunction();blue
      let stranger = true; // O(n) - A exec. depende do número de elementos do input
      a++; // O(n) - A exec. depende do número de elementos do input
    }
    return a; //0(1)
  }

  function anotherFunction(){

  }

  //BIG O(3 + 4n) -> Simple O(n)