const args = process.argv.slice(2);
const myPhrase = args[0];
console.log(myPhrase);
const myNum = parseInt(args[1]);

if (args.length != 2) {
  console.log("Please Provide 2 arguments: First String , Second Number");
}
if (isNaN(myNum)) {
  console.log("Invalid Argument at Position 2, Enter a Number");
}

const words = myPhrase.split(" ");

const encrypt = (word, myNum) => {
  let encryptedWord = "";
  for (let i = 0; i < word.length; i++) {
    let char = word[i];

    if (char.match(/[a-z]/i)) {
      let charCode = word.charCodeAt(i);
      let base = charCode >= 65 && charCode <= 90 ? 65 : 97;
      char = String.fromCharCode(((charCode - base + myNum) % 26) + base);
    }
    encryptedWord += char;
  }
  return encryptedWord;
};

const encryptedWords = words.map((word) => encrypt(word, myNum));
const encryptedPhrase = encryptedWords.join(" ");
console.log(`# Output: ${encryptedPhrase}`);
