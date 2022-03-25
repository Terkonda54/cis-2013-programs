var $ = function (id) 
{
    return document.getElementById(id);
}

doStuffComputer = function()
{
	whileFunction();
	forFunction();
	doWhileFunction();
}


function whileFunction()
{
	var counter = 1;
	var output = "";	
    while(counter <= 100){
        if(counter % 15 == 0){
            output += "FizzBuzz" + "\n";
            counter++;
        }
        else if(counter % 5 == 0){
            output += "Buzz" + "\n";
            counter++;
        }
        else if(counter % 3 == 0){
            output += "Fizz" + "\n";
            counter++;
        }
        else{
            output += counter + "\n";
            counter++;
        }
    }
    alert(output);
}


function forFunction()
{
    var outputFor = "";
	for(var counter = 1; counter <= 100; counter++){
        if(counter % 15 == 0){
            outputFor += "FizzBuzz" + "\n";
        }
        else if(counter % 5 == 0){
            outputFor += "Buzz" + "\n";
        }
        else if(counter % 3 == 0){
            outputFor += "Fizz" + "\n";
        }
        else{
            outputFor += counter + "\n";
        }
    }
    alert(outputFor);
}
	


function doWhileFunction()
{
	var counter = 1;
    var outputDoWhile = "";
    do{
        if(counter % 15 == 0){
            outputDoWhile += "FizzBuzz" + "\n";
            counter++;
        }
        else if(counter % 5 == 0){
            outputDoWhile += "Buzz" + "\n";
            counter++;
        }
        else if(counter % 3 == 0){
            outputDoWhile += "Fizz" + "\n";
            counter++;
        }
        else{
            outputDoWhile += counter + "\n";
            counter++;
        }
    } while(counter <= 100)
    alert(outputDoWhile);
	
	
}
    
    
    
    
    
    
    
    
    
//alert(output);
	




window.onload = function()
{
	$("doIt").onclick = doStuffComputer;
}

