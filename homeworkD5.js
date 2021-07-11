/*
ASSIGNMENT RULES
- All the answers must be written in JavaScript
- You can ask for help, reach the Teaching Assistants if needed
- The solution must be available for the tutors by the end of the day (5PM CET)
- You can Google / use StackOverflow BUT we suggest you to use just the material provided
*/

/* EXERCISE 1
Write a function "area" which receives 2 parameters (l1,l2) and calculates the area of the associated rectangle.
*/

const area = function(l1, l2) {
    let area = (l1 * l2)
    return area
}

let result = area(3, 4)
console.log(result)


/* EXERCISE 2
Write a function "crazySum" which receives two integers. It should return the sum of those two values, but if the two values are the same then it should return their sum multiplied by 3.
*/

const crazySum = function (a, b) {
    let result
    if (a === b) {
        result = (a + b) * 3
        // return result
    } else {
        result = (a + b)
        // return result
    }
    return result
}

// let crazySumResult = crazySum(3, 4)
console.log(crazySum(3, 4))


/* EXERCISE 3
Write a function "crazyDiff" that computes the absolute difference between a given number and 19. 
It should return triple their absolute difference if the given number is greater than 19.
*/
// let a 
// let b = 19
// const crazyDiff = function(a, b) {
//     let result
//     if (a > b) {
//         result = [Math.abs(a - b)] * 3
//         // return result
//     } else {
//         result = Math.abs(a - b)
//         // return result
//     }
//     return result
// }

function crazyDiff (n) {
    let x = Math.abs(n-19)
    if (x>19) {
        return x*3
    } else {
        return crazyDiff
    }
}

console.log(crazyDiff(39))


/* EXERCISE 4
Write a function "boundary" which accept an integer n and returns true if n is within 20 and 100 (included) or if it's equal to 400.
*/

// let a
// // let greaterThan = a >= 20
// // let smallerThan = a <= 100

const boundary = function(a) {
    if (a>= 20 && a <= 100 || a === 400) {
        return true
    } else {
        return false
    }
}

// let printedResult = boundary(101)
// console.log(printedResult)
console.log(boundary(101))


/* EXERCISE 5
Write a function "strivify" which accepts a string.
It should add the word "Strive" in front of the given string, but if the given string already begins with "Strive", then it should just return the original string.
*/

// First way
let strivify = function(str) {
    if (str.startsWith("Strive")) {
        return str
    } else {
        return "Strive " + str
    }
}

console.log(strivify("Lia"))

// Second way
// function strivify(str) {
//     if (str.startsWith("Strive")) {
//         return str
//     } else {
//         return "Strive"+" "+str
//     }
// }

// console.log(strivify("Lia"))

//Third way
// const strivify2 = str2 => str2.startsWith("Strive")? str2 :"Strive"+" "+str2
// console.log(strivify2("Lia"))

/* EXERCISE 6
Write a function "check3and7" which accepts a positive number and check if it is a multiple of 3 or a multiple of 7.
HINT: Module Operator
*/
let check3and7 = function(a) {
    if (a%3 === 0 || a%7 === 0) {
        return true +" because is multiple of 3 or 7"
    } else {
        return false +" because is neither multiple of 3 nor 7"
    }
}

console.log(check3and7(30))
console.log(check3and7(1))



/* EXERCISE 7
Write a function "reverseString" to programmatically reverse a given string (es.: Strive => evirtS).
*/
const reverseString = function(string){
    let reversedString = string.split("").reverse().join("")
    // reversedString.reverse().join("-")

    return reversedString
}

console.log(reverseString("Strive"))

// let reversedString = string.split("")
// reversedString.reverse().join("")
// return reversedStrtring  



/* EXERCISE 8
Write a function "upperFirst" to capitalize the first letter of each word of a given string passed as a parameter.
*/
//The charAt(index) function returns only the character at a given position in a string. 
const upperFirst = function(string){
    let capitalizedString = string.charAt(0).toUpperCase() + string.slice(1)
    return capitalizedString
}

console.log(upperFirst("lia"))


/* EXERCISE 9
Write a function "cutString" to create a new string without the first and last character of a given string.
*/
const cutString = function(string2){
    let newString = string2.slice(1, -1)
    return newString
}

console.log(cutString("Puppa"))


/* EXERCISE 10
Write a function "giveMeRandom" which accepts a number n and returns an array containing n random numbers between 0 and 10.
*/
const giveMeRandom = function(x){
    let randomArray = []
    for (let i=0; i<x; i++){
        let random= Math.floor(Math.random()*10)
        randomArray.push(random)
    }
    return randomArray
}
console.log(giveMeRandom(3))

// >------------------------< EXTRA >------------------------<
/* EXERCISE 11                                                          
Write a function "checkArray" which receives an array of random numbers (created with giveMeRandom) and prints, for each item, whether it's bigger than 5.
The function returns the sum of the numbers bigger than 5.
*/
let randomArray = giveMeRandom(3)
console.log(randomArray)

let checkArray = function(arr){
    let totalSum = 0
    for(let element of arr){
        if(element > 5){
            console.log(`${element} is bigger than 5!`)
            totalSum += element
            //return totalSum   only the sum of one of the element bigger than five (for ex: 7)
        } else if (element === 5){
            console.log(`${element} is equal to 5!`)
        } else if (element < 5){
            console.log(`${element} is smaller than 5!`)
        }
    }
    return totalSum //the sum of all the elements bigger than five (for ex: 7 + 7)
}

console.log(checkArray(randomArray))

/* EXERCISE 12
In your eCommerce you have an array of objects called shoppingCart. In this array you have a number of objects with a price, a name, an id and the quantity to be shipped.
Create a function "shippingCartTotal" which calculates the total due to the shop.
*/
let shoppingCart = [
    {price: 40, id: "A13546", product: "Wireless Keyboard", quantity: 1 },
    {price: 2,  id: "A13548", product: "Red Bull 500ml", quantity: 10 },
    {price: 30,  id: "A13551", product: "HD Webcam", quantity: 1 },
]

let shippingCartTotal = function(array){
    let totalCost = 0
    for (let item of shoppingCart){
        totalCost += item.price * item.quantity
    }
    return totalCost
}

console.log(shippingCartTotal(shoppingCart))


/* EXERCISE 13
In your eCommerce you have an array of objects called shoppingCart. In this array you have a number of objects with a price, a name, an id and the quantity to be shipped.
Create a function "addToShoppingCart" which receives a new object, adds it to shoppingCart and returns the total number of items in the shoppingCart.
*/

let newProduct = {price: 20, id: "A14547", product: "Earphones", quantity: 2 }

let addToShoppingCart = function(obj){
    shoppingCart.push(obj)
    let totalItems = 0
    for (let item of shoppingCart){
        totalItems += item.quantity
    }
    return totalItems
}

console.log(addToShoppingCart(newProduct))

/* EXERCISE 14
In your eCommerce you have an array of objects called shoppingCart. In this array you have a number of objects with a price, a name, an id and the quantity to be shipped.
Create a function "maxShoppingCart" which receives the shoppingCart array and returns the most expensive item in the array.
*/
let maxShoppingCart = function(array){
    let mostExpensive = array[0]
    for (let item of shoppingCart){
        if (item.price > mostExpensive.price){
            mostExpensive = item
        }
    }
    return mostExpensive //return mostExpensive.name
}

console.log(maxShoppingCart(shoppingCart))


/* EXERCISE 15
In your eCommerce you have an array of objects called shoppingCart. In this array you have a number of objects with a price, a name, an id and the quantity to be shipped.
Create a function "latestShoppingCart" which receives the shoppingCart array and returns the last item.
*/
let latestShoppingCart = function(array){
    //let lastItem = array.length-1     returns only index
    //let lastItem = array.slice(-1)
    let lastItem = array[array.length-1]
    return lastItem
}

console.log(latestShoppingCart(shoppingCart))

/* EXERCISE 16
Create a function "loopUntil" which receives an integer x between 0 and 9.
The function loops and prints a random number between 0 and 9 until the random number is bigger than x for three times in a row.
*/
// let loopUntil = function(x){
//     let randomNumber = Math.floor(Math.random() * 9) +1

// }


/* EXERCISE 17
Write a function "average" which receives an array and return the average value. The function automatically skips non-numeric entries in the array.
*/
let average = function(array){      //not working
    let totalSum = 0
    // for (let element of array){
    //     averageResult += element
    // }
    for (let i=0; i<array.length; i++){
        // if (typeof (array[i]) === 'number' ){       implement the "filter" for numbers
            totalSum += array[i]
        // }   
    }
    let averageResult = totalSum / array.length

    return averageResult
}

console.log(average([10, 22, 4, 'puppa']))

/* EXERCISE 18
Write a function "longest" to find the longest string from an given array of strings.
*/
let longest = function(){
    
}


/* EXERCISE 19
Write a function to create a very simple anti spam filter for your mailbox. The function takes a string emailContent, and returns a boolean.
Check if the email is valid using string methods. The email (in this example) is valid if the words SPAM and SCAM does not appear.
*/



/* EXERCISE 20
Write a function that receives a date d as parameter and calculates the number of days passes since the d.
*/



/* EXERCISE 21
Write a function "matrixGenerator" that receives x and y as parameter. The result should be a matrix of x times y with, as value, the index of the position.
Ex.: X = 3, Y = 2
["00","01","02"
"10","11","12"]
*/

