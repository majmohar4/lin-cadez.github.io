const quoters = require('./quoters');
const { createCanvas, loadImage } = require('canvas');
const canvas = createCanvas(900, 900);
const ctx = canvas.getContext('2d');

let text = quoters.Quote.print();

try {
  text = text.split("―")[0];
} catch (error) {
}

try {
  text = text.split("-")[0];
} catch (error) {
}

function randomColor() {
  return [
    Math.floor(Math.random() * 256),
    Math.floor(Math.random() * 256),
    Math.floor(Math.random() * 256),
  ];
}

let [r, g, b] = randomColor();

let color1 = cG.Color({
  red: r,
  green: g,
  blue: b,
});

let color2 = color1.complementary();

function hexToRgb(value) {
  value = value.substring(2);
  let lv = value.length;
  return [
    parseInt(value.substring(0, lv / 3), 16),
    parseInt(value.substring(lv / 3, 2 * lv / 3), 16),
    parseInt(value.substring(2 * lv / 3), 16),
  ];
}

console.log(color1, color2);
color1 = hexToRgb(color1.hex());
color2 = hexToRgb(color2.hex());

console.log(color1, color2);

let sentence = text;

let fnt = '100px Winter Moment';

ctx.fillStyle = `rgb(${color1[0]}, ${color1[1]}, ${color1[2]})`;
ctx.fillRect(0, 0, 900, 900);

ctx.font = fnt;

let sum = 0;
for (let i = 0; i < sentence.length; i++) {
  sum += ctx.measureText(sentence[i]).width;
}

let averageLengthOfLetter = sum / sentence.length;

let numberOfLettersForEachLine = (900 / 1.618) / averageLengthOfLetter;

let freshSentence = '';
let incrementer = 0;

for (let i = 0; i < sentence.length; i++) {
  let letter = sentence[i];
  if (letter === '-') {
    freshSentence += '\n\n\n' + letter;
  } else if (incrementer < numberOfLettersForEachLine) {
    freshSentence += letter;
  } else {
    if (letter === ' ') {
      freshSentence += '\n';
      incrementer = 0;
    } else {
      freshSentence += letter;
    }
  }
}