function reverse(str) {
  if(!str || str.length < 2 || typeof str !== 'string') {
    return 'hmm that is not good'
  }

  return str.split('').reverse().join('')
}

const reverse2 = str => {
  if(!str || str.length < 2 || typeof str !== 'string') {
    return 'hmm that is not good'
  }

  return [...str].reverse().join('')
}

console.log(reverse2('Junior Bytes'))