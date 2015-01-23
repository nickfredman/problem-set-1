var letterCapitalize = function (string) {
    var capArray = string.split(" ");
    // console.log(capArray);
    for (var i = 0; i < capArray.length; i++) {
        var tempWord = capArray.shift();
        var firstLetter = tempWord.slice(0, 1).toUpperCase();
        tempWord = firstLetter + tempWord.slice(1);
        capArray.push(tempWord);
        // console.log(capArray);
    };
    console.log(capArray.join(" "));
};

letterCapitalize("this is a sample string");

var wordCount = function (string) {
    var words = string.split(" ");
    var wordLength = words.length;
    return wordLength;
}

console.log(wordCount("this is a sample string"));

var primeTime = function (num) {
    if (num < 2) {
        return false
    };
    var isPrime = true;
    for (var i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            isPrime = false;
        };
    };
    return isPrime;
};

console.log(primeTime(15));