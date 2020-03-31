const nemo = ['nemo']                                   // O(1)
const everyone = ['dory', 'bruce', 'marlin', 'nemo',
'gill', 'bloat', 'nigel', 'squirt', 'darla', 'hank']    // O(10)
const large = new Array(1000).fill('nemo')              // O(1000)

function findNemo(array) {
  for (let i = 0; i < array.length; i++) { // aumenta conforme a entrada
    if (array[i] === 'nemo') {
      console.log('Found NEMO')
    }
  }
}

findNemo(large) // O(n) --> Linear Time

// Big O não mede as coisas em segundos, foca apenas na rapidez com 
// que o tempo de execução cresce. Usando o tamanho da entrada e comparando 
// o número de operações que aumentam, isso q significa escalabilidade,
// à medida que as coisas crescem, ele escala.