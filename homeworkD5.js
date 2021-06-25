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
        return result
    } else {
        result = (a + b)
        return result
    }
}

let crazySumResult = crazySum(3, 4)
console.log(crazySumResult)