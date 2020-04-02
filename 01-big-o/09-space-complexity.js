// O que causa a complexidade de espaço?
// Variables, data structures, function call, allocations

function boooo(n) {
  for (let i = 0; i < n.length; i++) {
    console.log('booooooo!')
  }
}
boooo([1,2,3,4,5]) // O(1)
// Só há controle com o que acontece dentro da função
// Apenas let i = 0 ocupa memo na função

function arrayOfHiNTimes(n) {
  let hiArray = []
  for (let i = 0; i < n; i++) {
    hiArray[i] = 'hi'
  }
  return hiArray
}
arrayOfHiNTimes(6) // O(n)
// Cria uma estrutura de array dentro da função
// hiArray[i] = 'hi'