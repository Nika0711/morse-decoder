
const MORSE_TABLE = {
    '.-': 'a',
    '-...': 'b',
    '-.-.': 'c',
    '-..': 'd',
    '.': 'e',
    '..-.': 'f',
    '--.': 'g',
    '....': 'h',
    '..': 'i',
    '.---': 'j',
    '-.-': 'k',
    '.-..': 'l',
    '--': 'm',
    '-.': 'n',
    '---': 'o',
    '.--.': 'p',
    '--.-': 'q',
    '.-.': 'r',
    '...': 's',
    '-': 't',
    '..-': 'u',
    '...-': 'v',
    '.--': 'w',
    '-..-': 'x',
    '-.--': 'y',
    '--..': 'z',
    '.----': '1',
    '..---': '2',
    '...--': '3',
    '....-': '4',
    '.....': '5',
    '-....': '6',
    '--...': '7',
    '---..': '8',
    '----.': '9',
    '-----': '0',
    '     ': ' ',
};
const MORSE_Number = {
    '10': '.',
    '11': '-',
    '**': ' ',
}
function decode(expr) {
    let arrFromNumber = [];
    let arrFromTwo = [];
    for (let i = 0; i < expr.length; i += 2) {
        arrFromTwo.push(expr.slice(i, i + 2))
    }
    for (let i = 0; i < arrFromTwo.length; i = i + 5) {
        arrFromNumber.push(arrFromTwo.slice(i, i + 5))
    }
    let result = [];
    for (let i = 0; i < arrFromNumber.length; i++) {
        result.push(arrFromNumber[i].filter(item => item != "00"))
    }
    console.log(result)
    let answer = [];
    answer = result.map(item => item.map(item => MORSE_Number[item])).map(item => item.join('')).map(item=> MORSE_TABLE[item]).join('')

   return answer
    
}


module.exports = {
    decode
}
