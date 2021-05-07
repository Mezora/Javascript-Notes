/*
    El valor null es un literal de Javascript que representa
    intencionalmente un valor nulo o "vacío". Es uno de los
    valores primitivos de Javascript. 
*/

function getVowels(str) {
    const m = str.match(/[aeiou]/gi);
    if (m === null) {
        return 0;
    }
    return m.length;
}

console.log(getVowels('sky')) // 0