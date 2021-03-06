// 1. Write a function that takes a number and returns true if it is a positive number and false if it is a negative number.

const isNumberPositive = (trueOrFalse) => {
   if (trueOrFalse >= 0) {
    console.log(true);
   }
   else {
    console.log(false);
   }
}

isNumberPositive(-1) //returns false
isNumberPositive(10) //returns true

// 2. Write a function that takes a number of days and converts it into an age.

const convertDaysToAge = (numberOfDays) => {
    Age = numberOfDays / 365;
    console.log(Age);
}

convertDaysToAge(3650); // returns 10
convertDaysToAge(6570); // returns 18

// 3. Write a function that takes three numbers and returns the largest of the three numbers.

const getLargestNumber = (firstNumber, secondNumber, thirdNumber) => {
    if (firstNumber > secondNumber && firstNumber > thirdNumber) {
        console.log(firstNumber);
    }
    else if (secondNumber > firstNumber && secondNumber > thirdNumber) {
        console.log(secondNumber);
    }
    else {
        console.log(thirdNumber);
    }
}

getLargestNumber(2 ,1, 4); // returns 4
getLargestNumber(6,2,3); // returns 6


// 4. Write a function that takes an array of names and returns the last name from the array of names.

function getLastName() {
    for(let index = 0; index < arguments.length; index++) {
        console.log(arguments[index].at(-1));
    }
}

getLastName(["Charlie","Rob","Andy"]); //returns Andy
getLastName(["Ash","Stu"]);  // returns "Stu"


// 5. Write a function that takes an array of numbers and returns true if all of the numbers are positive.
//    It should return false if there are one or more negative numbers in the array.

function allNumbersPositive(arr) {
let result = true;
for (let i = 0; i < arr.length; i++) {
    if (arr[i] <= 0) {
        result = false;
        break;
    }
}
console.log(result);
}

allNumbersPositive([2,4,5]); // returns true
allNumbersPositive([-5,4,6]); // returns false