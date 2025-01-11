
//////////////////     task 1      /////////////////////

function findSmallest(arr) {
    return Math.min(...arr);
}
console.log(findSmallest([30, 45, 60, 7]));

//////////////////     task 2     //////////////////////

function alphabeticalOrder(str) {
    return str.split('').sort().join('');
}
console.log(alphabeticalOrder('hello'));

//////////////////     task 3     //////////////////////

function oddOrEven(num) {
    return num % 2 === 0 ? "Even" : "Odd";
}
console.log(oddOrEven(9)); 

//////////////////     task 4     //////////////////////

function evenNum(arr) {
    return arr.filter(num => num % 2 === 0);
}
console.log(evenNum([1, 2, 3, 4, 5, 6, 7, 8, 9])); 

/////////////////      task 5     //////////////////////

function getAbsSum(arr) {
    return arr.reduce((sum, num) => sum + Math.abs(num), 0);
}
console.log(getAbsSum([-1, -3, -5, -4, -10, 0])); 

/////////////////      task 6     //////////////////////

function factorial(n) {
    return n === 0 ? 1 : n * factorial(n - 1);
}
console.log(factorial(8)); 

/////////////////      task 7     //////////////////////

function numbersOnly(arr) {
    return arr.filter(item => typeof item === 'number');
}
console.log(numbersOnly(['Ayham', 3, 7, 'Alaa', 13, 'coding'])); 

/////////////////      task 8     //////////////////////
function addUp(num) {
    return (num * (num + 1)) / 2;
}
console.log(addUp(8)); 

/////////////////      task 9     //////////////////////

function minMaxLengthAverage(arr) {
    let min = Math.min(...arr);
    let max = Math.max(...arr);
    let length = arr.length;
    let average = arr.reduce((sum, num) => sum + num, 0) / length;
    return [min, max, length, average];
}
console.log(minMaxLengthAverage([7, 13, 3, 77, 100])); 

/////////////////      task 10    //////////////////////

function romanNumbers(num) {
    const romanMap = [
        [1000, 'M'], [900, 'CM'], [500, 'D'], [400, 'CD'],
        [100, 'C'], [90, 'XC'], [50, 'L'], [40, 'XL'],
        [10, 'X'], [9, 'IX'], [5, 'V'], [4, 'IV'], [1, 'I']
    ];
    let result = '';
    for (let [value, numeral] of romanMap) {
        while (num >= value) {
            result += numeral;
            num -= value;
        }
    }
    return result;
}
console.log(romanNumbers(1989));

/////////////////      task 11     //////////////////////

function countWords(str) {
    return str.split(' ').length;
}
console.log(countWords('hello from CodingAcademy!')); 

/////////////////      task 12     //////////////////////

function multiplyByLength(arr) {
    let length = arr.length;
    return arr.map(num => num * length);
}
console.log(multiplyByLength([4, 2, 5])); 

/////////////////      task 13     //////////////////////

function checkEnding(str1, str2) {
    return str1.endsWith(str2);
}
console.log(checkEnding("CodingSchool", "Ac")); 

/////////////////      task 14     //////////////////////

function doubleChar(str) {
    return str.split('').map(char => char + char).join('');
}
console.log(doubleChar('Coding'));

/////////////////      task 15     //////////////////////

function findIndex(arr, element) {
    return arr.indexOf(element);
}
console.log(findIndex(['Ali', 'Mazen', 'Ayham', 'Murad'], 'Ali')); 











