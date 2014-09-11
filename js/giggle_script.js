//Project Three - The Gigglator.
var myGiggles = prompt("Use Youtube to search the words ** funny cat fails **. Watch the video and Enter the amount of times you giggled."); //user enters the amount of giggles they had from watching the video.
var myComedy = prompt("Each giggle on average lasts 5 seconds. Please enter the rough amount of comedy you watch per week in hours."); //user enters the amount of comedy they watch per week.
var myLaff = myGiggles * 5 / myComedy; // calculates the miles driven divided by the vehicle's miles per gallon.
//console.log(myGPD); //prints out to the console.
var resultGPD = "You use roughly " + myGPD + "Gallons of gas per day to drive to work.";
alert(resultGPD);
var myDays = prompt("How many days do you work per week? Please enter the total days.") * 50; //user enters the weekly amount of days they work.
var myGTY = myDays * myGPD; // calculates the total of yealy days multiplied by the vehicle's gallons per day.
//console.log(myGTY); //prints out to the console.
var resultGTY = "You use roughly " + myGTY + "Gallons of gas per year to drive to work."; //Javascript displays the totals
alert(resultGTY);
var myGPrice = prompt("How much is the cost of a gallon of gas at your local gas station? Enter the Price Per Gallon. $"); //user enters the price of gas per gallon.
myFloat = parseFloat(myGPrice);
var myGETY = myFloat * myGTY; // calculates the total of yearly cost of gas.
//console.log(myGETY); //prints out to the console.
var resultGETY = "You use roughly $" + myGETY + "Dollars of your hard earned cash per year to drive to work."; //Javascript displays the totals
alert(resultGETY);