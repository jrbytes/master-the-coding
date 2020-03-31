// // Regra 1 :: O Big-O se preocupa com o pior cenário, 
// // Regra 2 :: Remover constantes
// // Regra 3 :: Diferentes termos de input, (input1, input2)
// // Regra 4 :: Descarta a não dominância, termos !dominantes


// // Regra 1
// const nemo = ['nemo']                                   
// const everyone = ['dory', 'bruce', 'marlin', 'nemo',
// 'gill', 'bloat', 'nigel', 'squirt', 'darla', 'hank']
// // Se nemo estivesse no indice 9 do array, seria o pior cado
// // pq iria percorrer todo o array p chegar nele, essa é a 
// // primeira regra do Big-O, se preocupar com pior cenário
// const large = new Array(1000).fill('nemo')              

// function findNemo(array) {
//   for (let i = 0; i < array.length; i++) {
//     if (array[i] === 'nemo') {
//       console.log('Found NEMO')
//       break // Tornou o código mais eficiente
//     }
//   }
// }
// findNemo(everyone)


// // Regra 2
// function printFirstItemThenFirstHalfThenSayHi100Times(items) {
//   console.log(items[0])

//   var middleIndex = Math.floor(items.length / 2)
//   var index = 0

//   while (index < middleIndex) {
//     console.log(items[index])
//     index++
//   }

//   for (var i = 0; i < 100; i++) {
//     console.log('hi')
//   }
// }
// // O(1 + n/2 + 100)
// // O(n/2 + 101)
// // O(n/2 + 1)
// // O(n + 1)
// // O(n)

// function compressBoxesTwice(boxes) {
//   boxes.forEach(function(boxes) {
//     console.log(boxes)
//   })
  
//   boxes.forEach(function(boxes) {
//     console.log(boxes)
//   })
// }
// // O(2n) // Loops se repetindo
// // O(n)


// // Regra 3
// function compressBoxesTwice(boxes, boxes2) {
//   boxes.forEach(function(boxes) {
//     console.log(boxes)
//   })

//   boxes2.forEach(function(boxes) {
//     console.log(boxes)
//   })
// }
// // O(a + b) // Loops diferentes, os args

// // Evitar for dentro de for, é um código horrível
// // as operações crescem exponencialmente
// const boxes = [1,2,3,4,5]

// function logAllPairsOfArray(array) {
//   for (let i = 0; i < array.length; i++) {
//     for (let j = 0; j < array.length; j++) {
//       console.log(array[i], array[j])
//     }
//   }
// }
// logAllPairsOfArray(boxes)

// // O(n * n)
// // O(n^2)


// Regra 4
function printAllNumbersThenAllPairSums(numbers) {
  console.log('these are the numbers:')
  numbers.forEach(function(number) {
    console.log(number)
  })

  console.log('and these are their sums:')
  numbers.forEach(function(firstNumber) {
    numbers.forEach(function(secondNumber) {
      console.log(firstNumber + secondNumber)
    })
  })
}

printAllNumbersThenAllPairSums([1,2,3,4,5])