var $ = function (id) 
{
    return document.getElementById(id);
};

var calculate_click = function () 
{
    var floatHwPts, floatMidPts, floatFinPts, floatTotalPts, intGradeOption;

    //Getting all of the DOM inputs into JS variables
    floatHwPts = parseFloat($("hw_pts").value);
    floatMidPts = parseFloat($("mid_pts").value);
    floatFinPts = parseFloat($("fin_pts").value);
    intGradeOption = parseInt($("grade_option").value);

    //Calculate end grade
    floatTotalPts = parseFloat(floatHwPts + floatMidPts + floatFinPts);

    //Equating grade numbers to letters
    if (intGradeOption===1)
    {
        if(floatTotalPts >= 80){
            $("final_grade").value = "Pass"
        }
        else{
            $("final_grade").value = "Fail"
        }
    }
    else{
        if(floatTotalPts >= 90){
            $("final_grade").value = "Letter grade is: A";
        }
        else if(floatTotalPts <= 90 && floatTotalPts >= 80){
            $("final_grade").value = "Letter grade is: B";
        }
        else if(floatTotalPts <= 80 && floatTotalPts >= 70){
            $("final_grade").value = "Letter grade is: C";
        }
        else if(floatTotalPts <= 70 && floatTotalPts >= 60){
            $("final_grade").value = "Letter grade is: D";
        }
        else if(floatTotalPts < 60){
            $("final_grade").value = "Letter grade is: F";
        }
    }

};

window.onload = function () 
{
    $("final_grade").value = ""; //blanks the final grade text box upon page load
    $("calculate").onclick = calculate_click; //activates main method when the button is clicked 
    $("hw_pts").focus(); //puts the cursor on the first DOM text input box
};