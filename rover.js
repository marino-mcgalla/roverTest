//array of cardinal directions, allows for "rotating" through directions using indexOf method
var cardinalArray = ["E", "S", "W", "N"];

function roverProgram() {
    //these 3 lines prompt the user for test case input
    var input1 = prompt("Greetings, astronaut! What are the upper-right coordinates your rover will be traveling today?");
    var input2 = prompt("Where is your rover currently located and what is its oritentation?");
    var input3 = prompt("Great! Ready for movement instructions!");

    //parses string of coordinates to be manipulated later using movement instructions
    var upperCoord = parseCoordinates(input1);
    var initCoord = parseCoordinates(input2);

    var orientation = cardinalArray.indexOf(getOrientation(input2));

    var instructArray = input3.split('');

    moveRover(upperCoord, initCoord, orientation, instructArray);
}

//parses the first 2 characters of input. If there is a third(orientation) it is removed
function parseCoordinates(coordString) {
    //splits space seperated input into array of strings
    var coordInts = coordString.split(' ');
    //parses each string to an integer
    for (var i = 0; i < coordInts.length; i++) {
        coordInts[i] = parseInt(coordInts[i], 10);
    }
    //if input contained more than 2 coordinate integers, delete the orientation (third element)
    if (coordInts.length = 3) {
        delete coordInts[2];
    }
    //return array of parsed integers
    return coordInts;
}

//accepts input of coordinate and orientation, returns only the orientation
function getOrientation(orientString) {
    var splitArray = orientString.split(' ');
    return splitArray[2];
}

//steps through array of instructions and performs the desired action for each
function moveRover(upperCoord, initCoord, orientation, instructions) {

    for (var i = 0; i < instructions.length; i++) {

        if (instructions[i] == "L") {
            if (orientation == 0) {
                orientation = 3;
            }
            else {
                orientation -= 1;
            }
        }

        else if (instructions[i] == "R") {
            if (orientation == 3) {
                orientation = 0;
            }
            else {
                orientation += 1;
            }
        }
        //checks that movement won't move rover out of bounds, then performs movement command
        else if (instructions[i] == "M") {
            if (orientation == 0 /*E*/ && initCoord[0] + 1 <= upperCoord[0]) {
                initCoord[0] += 1;
            }
            else if (orientation == 2 /*W*/ && initCoord[0] - 1 >= 0) {
                initCoord[0] -= 1;
            }
            else if (orientation == 1 /*S*/ && initCoord[1] - 1 >= 0) {
                initCoord[1] -= 1;
            }
            else if (orientation == 3 /*N*/ && initCoord[1] + 1 <= upperCoord[1]) {
                initCoord[1] += 1;
            }
        }
    }
    //prints final output to the console (coordinates followed by orientation)
    console.log(initCoord[0] + " " + initCoord[1] + " " + cardinalArray[orientation]);
}

