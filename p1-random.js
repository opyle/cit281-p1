/*
    CIT 281 Project 1
    Name: Owen Pyle
*/

function getRandomInteger(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}

function generateRandomString() {
    const character = 'abcdefghijklmnopqrstuvwxyz';
    const minLength = 5;
    const maxLength = 26; 
    const length = getRandomInteger(minLength, maxLength);

    let result = '';
    for (let i = 0; i < length; i++) {
        const randomIndex = getRandomInteger(0, character.length - 1); 
        result += character[randomIndex]; 
    }
    return result;
}

const randomString = generateRandomString();
console.log(randomString);


