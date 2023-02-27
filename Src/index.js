const MORSE_TABLE = {
    '.-': 'a',
    '-...': 'b',
    '-.-.': 'c',
    '-..': 'd',
    '.': 'e',
    '..-.': 'f',
    '-.': 'g',
    '....': 'h',
    '..': 'i',
    '.---': 'j',
    '-.-': 'k',
    '.-..': 'l',
    '--': 'm',
    '-.': 'n',
    '---': 'o',
    '.--.': 'p',
    '-.-': 'q',
    '.-.': 'r',
    '...': 's',
    '-': 't',
    '..-': 'u',
    '...-': 'v',
    '.--': 'w',
    '-..-': 'x',
    '-.--': 'y',
    '--..': 'z',
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

function decode (expr) {
    let result = String();
    for  (let i = 0; i <= expr - 10; i += 10) {
      let sub = expr.slice(i, i + 10);
      let temp = String();
      for (let j = 0; j <= sub.length - 2; j += 2) {
        let n = sub.slice(j, j + 2);
        if (sub === '**********') {
          temp = ' ';
          break;
        } else if (n === '10') {
            temp = ${temp}.;  
          } else if (n === '11') {
              temp = ${temp}-;
            } else {
              temp = temp + '';  
            }
        }
        result = ${result}${MORSE_TABLE[temp] || temp};
    }
    return result;
}

module.exports = {
    decode
}
