// Project Three - The Gigglator.
var myGiggles = prompt("Use Youtube to search the words ** funny cat fails **. Watch the video and Enter the amount of times you giggled."); // user enters the amount of giggles they had from watching the video.
var myGigtotal = myGiggles * 5; // calculates the total of giggles times 5 to get the daily viewing value.
var myComedy = prompt("Each giggle on average lasts 5 seconds. Please enter the rough amount of comedy you watch per week in hours."); // user enters the amount of comedy they watch per week.
var myLaff = myGigtotal * myComedy; // calculates the total of giggles times the amount of comedy you watch per week.
// console.log(myLaff); // prints out to the console.
var resultGigPW = "You giggle on average " + myLaff + " times per week! Can you believe it?"; // Javascript displays the totals. 
alert(resultGPW); // outputs the result in an alert box in the browser.
var myYVisitors = prompt("Go back to that same YouTube video you choose. Enter the amount of people who watched the video."); //user enters the amount of visitors that watched the video on YouTube.
var myVGT = myYVisitors * myLaff; // calculates the total of giggles per week of you and the YouTube visitors.
// console.log(myVGT); // prints out to the console.
var resultVGT = "You and all your fellow YouTube visitors giggle " + myVGT + " times per week! That's a lot of belly flutters! :) "; // Javascript displays the totals.
alert(resultVGT);
var myGPrice = prompt("How much is the cost of a gallon of gas at your local gas station? Enter the Price Per Gallon. $"); //user enters the price of gas per gallon.
myFloat = parseFloat(myGPrice);
var myGETY = myFloat * myGTY; // calculates the total of yearly cost of gas.
//console.log(myGETY); // prints out to the console.
var resultGETY = "You use roughly $" + myGETY + "Dollars of your hard earned cash per year to drive to work."; //Javascript displays the totals
alert(resultGETY);