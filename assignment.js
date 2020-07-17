//problem-1
/*
function feetToMile(feet){
    var mile = feet * 0.000189;
    return mile;
}

//testing function by various inputs
var miles1 = feetToMile(10);
var miles2 = feetToMile(20);
var miles3 = feetToMile(10.50);
console.log(miles3, miles1, miles2);
*/
//problem-2
/*
function woodCalculator(numOfChair, numOfTable, numOfKhat){
    var countWood = (numOfChair * 1) + (numOfTable * 3) + (numOfKhat * 5);
    return countWood;
}

//testing with different inputs
var total = woodCalculator(10, 2, 3);
console.log(total);
*/

//problem-3
/*
function brickCalculator(numOfFloor){
    var numOfBricks = 0;
    for(var i = 1; i <= numOfFloor; i++) {
        if(i <= 10) {
            numOfBricks = numOfBricks + (15 * 1000);
        }
        else if(i >= 11 && i <= 20) {
            numOfBricks = numOfBricks + (12 * 1000);
        }
        else {
            numOfBricks = numOfBricks + (10 * 1000);
        }
    }
    return numOfBricks;
}

//testing with some inputs
var numberOfBricks = brickCalculator(35);
console.log(numberOfBricks);

*/

//problem-4

function tinyFriend(arr) {
    var tinyName = arr[0];
    for(var i = 1; i < arr.length; i++) {
        if(arr[i].length < tinyName.length){
            tinyName = arr[i];
        }
    }

    return tinyName;
}

//testing with some outputs
var arrayNames = ['arif', 'rocky', 'maya', 'alexander', 'jonypapa'];
var smallestName = tinyFriend(arrayNames);
console.log(smallestName);