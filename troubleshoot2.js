var $ = function (id) {
    return document.getElementById(id);
};

var fixPrinter = function() {
    var stringOutput = "";  //declares stringOutput inital value to be blank

    //define the individual troubleshooting tips per the chart
    var stringMessage1 = "Check the power cable.";
    var stringMessage2 = "Check the printer-computer cable.";
    var stringMessage3 = "Ensure printer software is installed.";
    var stringMessage4 = "Check / replace ink.";
    var stringMessage5 = "Check for paper jam.";
    var stringMessage6 = "Looks like everything is working fine!";

    /* Need to be careful here when defining our boolean variables for use in the troubleshooting chart
     * and what you define as true or false.  For example, in the chart used in this problem,
     * a combination of Y-Y-Y results in messages 2, 3, & 4 being provided
     * to the user.  In this case, Y-Y-Y means
     * "the printer does NOT print"  AND "a red light is flashing" AND "the printer is unrecognized"
     */
    var boolPrinting = $("not_printing").selected;  //returns a value of true only when the not_printing html id is selected from the dropdown menu
    var boolRedLight = $("yes_redlight").selected;  //returns a value of true only when the yes_redlight html id is selected from the dropdown menu
    var boolRecognised = $("not_recognised").selected;  ////returns a value of true only when the not_recognized html id is selected from the dropdown menu

    //enter your code here and don't forget to send the output to the DOM

    //start of switch
    switch(true){
        //case true true true
        case boolPrinting === true && boolRedLight === true && boolRecognised === true:
            stringOutput = stringMessage2 + " " + stringMessage3 + " "+ stringMessage4;
            break;
        //case true true false
        case boolPrinting === true && boolRedLight === true && boolRecognised === false:
            stringOutput = stringMessage4 + " " + stringMessage5;
            break;
        //case true false true
        case boolPrinting === true && boolRedLight === false && boolRecognised === true:    
            stringOutput = stringOutput = stringMessage1 + " " + stringMessage2 + " " + stringMessage3;
            break;
        //case true false false
        case boolPrinting === true && boolRedLight === false && boolRecognised === false:    
            stringOutput = stringMessage5;    
            break;
        //case false true true
        case boolPrinting === false && boolRedLight === true && boolRecognised === true:    
            stringOutput = stringMessage3 + " " + stringMessage4;    
            break;
        //case false true false
        case boolPrinting === false && boolRedLight === true && boolRecognised === false:    
            stringOutput =stringMessage4;    
            break;
        //case false false true
        case boolPrinting === false && boolRedLight === false && boolRecognised === true:    
            stringOutput = stringMessage3;    
            break;
        //false false false
        default:
            stringOutput = stringMessage6;
            break;

    }


    /*
    //logic for printing
    if(boolPrinting === true){
        //logic for if red light is on
        if(boolRedLight === true){
            //logic for is recogninzed
            if(boolRecognised === true){
                stringOutput = stringMessage2 + " " + stringMessage3 + " " + stringMessage4;
            }
            else{
                stringOutput = stringMessage4 + " " + stringMessage5;
            }
        }
        //else for red light
        else{
            if(boolRecognised === true){
                stringOutput = stringMessage1 + " " + stringMessage2 + " " + stringMessage3;
            }
            else{
                stringOutput = stringMessage5;
            }
        }
    }
    //else for printing
    else{
        if(boolRedLight === true){
            if(boolRecognised === true){
                stringOutput = stringMessage3 + " " + stringMessage4;
            }
            else{
                stringOutput = stringMessage4;
            }
        }
        else{
            if(boolRecognised === true){
                stringOutput = stringMessage3;
            }
            else{
                stringOutput = stringMessage6;
            }
        }
    }
    */
    //dom output
    $("output").value = stringOutput;

}

window.onload = function () {
    $("troubleshoot").onclick = fixPrinter;
};




