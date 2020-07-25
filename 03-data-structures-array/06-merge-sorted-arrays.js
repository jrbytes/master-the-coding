const mergeSortedArrays = (array1, array2) => {
  return array1.concat(array2).sort(function(a, b){return a-b})
}

console.log(mergeSortedArrays([0, 2, 5, 45], [4, 6, 35]))