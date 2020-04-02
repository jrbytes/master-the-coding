// // Find 1st, Find Nth...
// const array = ['hi','my','teddy']
// array[0] // O(1)
// array[array.length-1] // O(1)


const array = [
  {tweet: 'hi', date: 2012},
  {tweet: 'my', date: 2014},
  {tweet: 'teddy', date: 2018}
]
// O(n^2)
// Para pegar por data, poderá custar expressões
// exponenciais com muitas operações e ficar
// muito caro de manter, pq n há recursos infinitos