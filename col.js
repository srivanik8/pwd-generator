const upperSet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerSet = "abcdefghijklmnopqrstuvwxyz";
const numbersSet = "0123456789";
const symbolsSet = "!@#$%^&*()_+-={}[]:";

const upperInput = document.getElementById("upper-case")
const lowerInput = document.getElementById("lower-case")
const numberInput = document.getElementById("numbers")
const symbolInput = document.getElementById("symbols")
const totalchar = document.getElementById("totalchar")
const display = document.getElementById("display")

const getRandomData = (dataset) => {
    return dataset[Math.floor(Math.random() * dataset.length)];
}

const generatePassword = (password = "") => {
    if (upperInput.checked) {
        password += getRandomData(upperSet)
        
    } if (lowerInput.checked) {
        password += getRandomData(lowerSet)
        
    } if (numberInput.checked) {
        password += getRandomData(numbersSet)
    } if (symbolInput.checked) {
        password += getRandomData(symbolsSet)
        
    } if (password.length < totalchar.value) {
        return generatePassword(password)
    }
    display.innerText = (truncateString(password, totalchar.value));
}

document.getElementById("btn").addEventListener(
    "click",
    function() {
        generatePassword();
    }
)


function truncateString(str,num) {
    if (str.length > num) {
        let subStr = str.substring(0, num);
        return subStr;
}  else {
    return str;
}
};

