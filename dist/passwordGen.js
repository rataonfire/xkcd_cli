"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.generatePassword = void 0;
const random_words_1 = require("random-words");
const getNumberInRange = (a, b) => {
    return Math.round(Math.random() * (a - b) + b);
};
const scrumbleCase = (word) => {
    return word.split("").map((x) => { return getNumberInRange(0, 1) ? x.toUpperCase() : x.toLowerCase(); }).join("");
};
const generateRandomWords = () => {
    const words = (0, random_words_1.generate)({ exactly: getNumberInRange(4, 6), minLength: 3 });
    return [...words].map(el => scrumbleCase(el));
};
const getRandomSpecialChar = () => {
    const specialChars = "~!@#$%^&*()_-+={[}]|\\:;\"\'<,>.?/".split("");
    return specialChars[getNumberInRange(0, specialChars.length - 1)];
};
const addSpecialChars = (word) => {
    for (let i = 0; i < getNumberInRange(1, 3); i++) {
        word = (getNumberInRange(0, 1) ? word + getRandomSpecialChar() : getRandomSpecialChar() + word);
    }
    return word;
};
const screwStringWithNumbers = (data) => {
    let arr = data.split("");
    for (let i = 0; i < Math.round((arr.length - 1) / 10); i++) {
        arr[getNumberInRange(0, arr.length - 1)] = getNumberInRange(0, 9).toString();
    }
    return arr.join("");
};
const createStringWithChars = (words) => [...words].map(word => addSpecialChars(word)).join("");
const generatePassword = () => {
    const words = generateRandomWords();
    const stringWithChars = createStringWithChars(words);
    const password = screwStringWithNumbers(stringWithChars);
    return password;
};
exports.generatePassword = generatePassword;
//# sourceMappingURL=passwordGen.js.map