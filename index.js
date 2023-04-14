// Write your solution here!
const cats = ["Milo", "Otis", "Garfield"];

function destructivelyAppendCat() {
    cats.push("Ralph");
}

function destructivelyPrependCat() {
    cats.unshift("Bob");
}

function destructivelyRemoveLastCat() {
    cats.pop();
}

function destructivelyRemoveFirstCat() {
    cats.shift();
}

function appendCat() {
    let newArray = [...cats];
    newArray.push("Broom");
    return newArray;
}

function prependCat() {
    let newArray = [...cats];
    newArray.unshift("Arnold");
    return newArray;
}

function removeLastCat() {
    let newArray = [...cats];
    newArray.pop();
    return newArray;
}

function removeFirstCat() {
    let newArray = [...cats];
    newArray.shift();
    return newArray;
}