/*function recur (num){
    let numF = 1
    for (let i=num; i>1; i-- ){
        numF = numF * i
        

    }
    return numF
    
}
console.log( recur(6))
*/

function fatorialRec(n){
    if (n <=1){
        return 1
    }else{
        return n * fatorialRec(n-1)
    }
}
console.log( fatorialRec(5))
