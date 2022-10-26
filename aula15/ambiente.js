var num = [2, 5, 8, 5, 1, 3]
num.sort()
num.push(1)
console.log(num)
console.log(`O vetor tem ${num.length} posições`)
console.log(`O primeiro valor do vetor é ${num[0]}`)

var pos = num.indexOf(8)
console.log(`O valor está na posição ${pos}`)