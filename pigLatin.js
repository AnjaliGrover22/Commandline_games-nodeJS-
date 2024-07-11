const myTranslatorPhrase = process.argv[2];
console.log("The Phrase you entered:-", myTranslatorPhrase);

let myWords = myTranslatorPhrase.split(" ");
let resultPhrase = "";
let consonantPhrase = "";
for (let i = 0; i < myWords.length; i++) {
  let firstChar = myWords[i].charAt(0).toLowerCase();
  let secondChar = myWords[i].charAt(1).toLowerCase();
  let word = myWords[i];
  if (
    firstChar === "a" ||
    firstChar === "e" ||
    firstChar === "i" ||
    firstChar === "o" ||
    firstChar === "u"
  ) {
    resultPhrase += `${myWords[i]}way `;
  } else if (
    (/^[a-zA-Z]/.test(firstChar) && secondChar === "a") ||
    secondChar === "e" ||
    secondChar === "i" ||
    secondChar === "o" ||
    secondChar === "u"
  ) {
    resultPhrase += `${word.slice(1)}${word.charAt(0).toLowerCase()}ay `;
  } else if (/^[a-zA-Z]/.test(firstChar)) {
    let j = 0;

    while (!/[aeiou]/i.test(word[j]) && j < word.length) {
      j++;
    }

    if (j === 2 && !/[aeiou]/i.test(word[1])) {
      resultPhrase += `${word.slice(2)}${word.slice(0, 2).toLowerCase()}ay `;
    } else {
      resultPhrase += `${word.slice(j)}${word.slice(0, j).toLowerCase()}ay `;
    }
  } else {
    resultPhrase += `${myWords[i]} `;
  }
}

console.log(`Output: ${resultPhrase}`);
