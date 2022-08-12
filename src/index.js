const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(encodedText) {
    let encodedChar = '';
    let morseChar = '';
    let decodedChar = '';
    let decodedText = '';
    let remainingText = encodedText;

    while (remainingText) {
        encodedChar = remainingText.substring(0, 10);
        
        if (encodedChar == '**********') {
            decodedChar = ' ';
        } else {
            morseChar = encodedChar
                .replace(/00/g, '')
                .replace(/10/g, '.')
                .replace(/11/g, '-');
    
            decodedChar = MORSE_TABLE[morseChar];  
        }

        decodedText += decodedChar;
        remainingText = remainingText.substring(10);
    } 
    
    return decodedText;
}
module.exports = {
    decode
}