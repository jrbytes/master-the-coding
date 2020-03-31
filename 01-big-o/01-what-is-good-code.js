// O Big-O pode responder: Quão bem um problema é resolvido.
// Definir bom código de um ótimo código ou excelente código.

// Um bom código é decrito como:
// 1. Legibilidade, se é um código limpo
// 2. Escalável

// O Big-O é o que permite medir essa ideia de código escalável

const nemo = ['nemo']

function findNemo(array) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === 'nemo') {
      console.log('Found NEMO')
    }
  }
}

findNemo(nemo)