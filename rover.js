function roverProgram() {
    //these 3 lines prompt the user for test case input
    var input1 = prompt("Greetings, astronaut! What are the upper-right coordinates your rover will be traveling today?");
    var input2 = prompt("Where is your rover currently located and what is its oritentation?");
    var input3 = prompt("Great! Ready for movement instructions!");

    //array of cardinal directions, allows for "rotating" through directions using indexOf method
    var cardinalArray = ["E", "S", "W", "N"];

    //parses string of coordinates to integers to be manipulated by movement instructions
    var upperCoord = parseCoordinates(input2);

    //gets the orientation using getOrientation (letter) and then gets the index of that character from the cardinals array
    var orientation = cardinalArray.indexOf(getOrientation(input2));
    console.log(orientation);

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

