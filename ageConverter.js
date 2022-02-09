//Instatiate variables
var floatAge, floatDays, intWeeks, floatMonths, intFortnights;

//Inital Prompt
floatAge = parseFloat(prompt("How old are you in years?"));

//Conversions from years into other forms
floatDays = parseFloat(floatAge * 365.25).toFixed(2);
intWeeks = parseInt(floatDays / 7);
floatMonths = parseFloat(floatAge * 12);
intFortnights = parseInt(floatDays / 14)

//Alert user with results
alert("You are " + floatAge + " years old. This means you are " + floatDays + " days old, " + intWeeks + " weeks old, " + floatMonths + " months old, and " + intFortnights + " fornights old.");