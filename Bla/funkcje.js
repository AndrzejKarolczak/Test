"use strict";

function runFibonacci() {
    // Założenie:
    // Numer wyrazy: 0, 1, 2, 3, 4, 5, 6,  7,  8,  9, 10, 11,  12
    //      Wartość: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144

    let returned = prompt("Fibonacci: podaj numer wyrazu (liczba większa od zera)");
    let returnedNumber = Number(returned);

    if (returned !== "" && returnedNumber >= 0) {
        let result = FibonacciSequence(returnedNumber);
        alert(`Wyraz ciągu Fibonacciego o numerze ${returnedNumber} to ${result}`);
    } else if (returned !== "" && returnedNumber < 0) {
        alert(`Podana liczba musi być większa lub równa zero (podano ${returnedNumber})!`);
    } else {
        alert('Podana wartość musi być liczbą!');
    }
}

function FibonacciSequence(termNumber) {
    let firstTerm = 0, secondTerm = 1, temp;

    if (termNumber === 0) return firstTerm;
    if (termNumber === 1) return secondTerm;

    while (termNumber >= 1) {
        temp = secondTerm;
        secondTerm = firstTerm + secondTerm;
        firstTerm = temp;
        termNumber--;
    }

    return firstTerm;
}

function palindromes() {
    // Założenie: wielkość liter nie jest brana pod uwagę
    let returned = prompt("Palindrom: wprowadź tekst, który chcesz sprawdzić");

    if (returned !== "" && returned.length > 1) {
        let a;
        isPalindrome(returned) ? a = "" : a = "nie ";
        alert(`'${returned}' ${a}jest palindromem`);
    } else {
        alert(`'${returned}' to mało ciekawy przypadek palindromu`);
    }
}

function isPalindrome(someString) {
    let stringToTest = someString.trim().toLowerCase().replace(/ /ig, "");

    let stringToTestBackwards = "";
    for (let i = stringToTest.length; i >= 0; i--) stringToTestBackwards += stringToTest.charAt(i);

    return stringToTestBackwards === stringToTest;
}

function amountToCoins(amount, arrayOfCoins) {
    /*
    Nie do końca zrozumiałem, co mam zrobić w tym zadaniu. Napisałem funkcję wyliczającą na ile monet
    jest podzielna podana kwota. Przy czym zacząłem od monety o najwyższym nominale plus każdorazowo zmniejszałem
    podaną kwotę o liczbę
     */
    let convertedAmount = Number(amount);

    if (typeof (amount) == "number" && convertedAmount > 0) {
        if (isArrayOfCoins(arrayOfCoins)) {
            return convertToCoins(convertedAmount, arrayOfCoins);
        } else {
            alert("Podany obiekt nie jest tablicą liczb nominałów monet");
        }
    } else {
        alert("Podana wartość nie jest liczbą większą od zera");
    }
    return [];
}

function isArrayOfCoins(something) {
    let allowedCoinNominalValues = [25, 10, 5, 2, 1];
    return Array.isArray(something)
        && something.length > 0
        && something.every(e =>
            typeof (e) == "number"
            && allowedCoinNominalValues.indexOf(Number(e)) > -1);
}

function convertToCoins(convertedAmount, arrayOfCoins){
    let numberOfCoinsForNominalValue = []
    let unique = Array.from(new Set(arrayOfCoins));

    unique.sort((left, right) => { // odwrotne sortowanie
        if (left < right) return 1;
        else if (left === right) return 0;
        else return -1;
    });

    for (let i = 0; i < unique.length; i++) {
        let nominalValue = Number(unique[i]);
        let howMany = Math.floor(convertedAmount / nominalValue);
        convertedAmount = convertedAmount - howMany * nominalValue;
        numberOfCoinsForNominalValue.push(` ${howMany} razy moneta o nominale ${nominalValue}`);
    }

    return numberOfCoinsForNominalValue;
}

