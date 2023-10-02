const mapMorseEncode = {
  "A": ".-", "B": "-...", "C": "-.-.", "D": "-..", "E": ".", "F": "..-.", "G": "--.",
  "H": "....", "I": "..", "J": ".---", "K": "-.-", "L": ".-..", "M": "--", "N": "-.",
  "O": "---", "P": ".--.", "Q": "--.-", "R": ".-.", "S": "...", "T": "-", "U": "..-",
  "V": "...-", "W": ".--", "X": "-..-", "Y": "-.--", "Z": "--..",
  "0": "-----", "1": ".----", "2": "..---", "3": "...--", "4": "....-", "5": ".....",
  "6": "-....", "7": "--...", "8": "---..", "9": "----.",
  " ": " ",
  ".": ".-.-.-", ",": "--..--", "?": "..--..", "'": ".----.", "!": "-.-.--",
  "/": "-..-.", "(": "-.--.", ")": "-.--.-", "&": ".-...", ":": "---...",
  ";": "-.-.-.", "=": "-...-", "+": ".-.-.", "-": "-....-", "_": "..--.-",
  "\"": ".-..-.", "$": "...-..-", "@": ".--.-."
};

const mapMorseDecode = {};
for (const [key, value] of Object.entries(mapMorseEncode)) {
  mapMorseDecode[value] = key;
}

function morseCode(str) {
  return str
    .split("")
    .map(char => mapMorseEncode[char] || " ")
    .join(" ");
}

function morseDecode(str) {
  const regex = /^[\.\- ]*$/;
  if(!regex.test(str)){
    throw new Error("Invalid morse code has been supplied.")
  }

  return (str.length === 0) ? '' : str
    .split(" ")
    .map(code => mapMorseDecode[code] || " ")
    .join("")
    .replace(/\s+/g, ' ');
}

module.exports = { morseCode, morseDecode };
