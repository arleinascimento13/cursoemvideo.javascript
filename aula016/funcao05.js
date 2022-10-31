// RECURSIVDADE

function fatorial(n) {
    // 5!  5x4!
    if (n == 1) {
        return 1
    } else
    {
        return n*fatorial(n-1)
    }
}

console.log(fatorial(5))